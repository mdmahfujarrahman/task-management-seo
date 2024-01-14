import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../lib/firebase";

export const uploadMultipleFileUpload = (
    file,
    fileIndex,
    setPercentUpload,
    // dispatch,
    // isOnboard
) => {
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const prog = `${Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            )}%`;
            setPercentUpload((prevData) => {
                const updatedData = [...prevData];
                updatedData[fileIndex] = {
                    name: file.name,
                    size: formatFileSize(file.size),
                    progress: prog,
                    task: uploadTask,
                };
                return updatedData;
            });
        },
        (error) => console.log(error),
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                // condition for onboard  and addproduct image upload

                console.log("ADDIMAGES", downloadURL);
            });

            setTimeout(() => {
                setPercentUpload((prevData) => {
                    const updatedData = [...prevData];
                    // Remove the uploaded file from the array
                    updatedData.splice(fileIndex, 1);
                    return updatedData;
                });
            }, 1000);
        }
    );
    return uploadTask;
};

export const formatFileSize = (sizeInBytes) => {
    if (sizeInBytes >= 1024 * 1024) {
        return (sizeInBytes / (1024 * 1024)).toFixed(2) + " MB";
    } else {
        return (sizeInBytes / 1024).toFixed(2) + " KB";
    }
};
