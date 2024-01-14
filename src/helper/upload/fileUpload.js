import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../lib/firebase";

export const uploadMultipleFile = (
    id,
    file,
    setPercentUpload
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
                const fileIndex = updatedData.findIndex(
                    (item) => item.id === id
                );
                updatedData[fileIndex] = {
                    ...updatedData[fileIndex],
                    progress: {
                        ...updatedData[fileIndex].progress,
                        progress: prog,
                        task: uploadTask,
                    },
                };
                return updatedData;
            });
        },
        (error) => console.log(error),
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setPercentUpload((prevData) => {
                    const updatedData = [...prevData];
                    const fileIndex = updatedData.findIndex(
                        (item) => item.id === id
                    );
                    updatedData[fileIndex] = {
                        ...updatedData[fileIndex],
                        uploadLink: downloadURL,
                    };
                    return updatedData;
                });
            });

            setTimeout(() => {
                setPercentUpload((prevData) => {
                    const updatedData = [...prevData];
                    const fileIndex = updatedData.findIndex(
                        (item) => item.id === id
                    );
                    updatedData[fileIndex] = {
                        ...updatedData[fileIndex],
                        isUploaded: true,
                    };
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
