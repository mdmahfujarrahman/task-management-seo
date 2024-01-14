import { useDropzone } from "react-dropzone";

import { AppIcons } from "../../assets/icon";
import { useCallback, useMemo } from "react";

const UploadAttachmentModalUploads = ({
    uploadingFiles,
    setUploadingFiles,
}) => {
    const filtersAcceptedFileHelper = (files) => {
        const filters = files.filter((file) => {
            return !uploadingFiles.some((item) => {
                return (
                    file.name === item.file.name && file.type === item.file.type
                );
            });
        });

        return filters;
    };

    const onDrop = useCallback(
        async (acceptedFile, fileRejections) => {
            if (fileRejections.length > 0) {
                alert(`${fileRejections.length} Over the file size`);
            }
            const filterAcceptedFile =
                uploadingFiles?.length > 0
                    ? filtersAcceptedFileHelper(acceptedFile)
                    : acceptedFile;

            filterAcceptedFile.forEach((file) => {
                setUploadingFiles((prev) =>
                    [
                        ...prev,
                        {
                            id: file.name,
                            file,
                            isUploaded: false,
                            progress: null,
                            uploadLink: null,
                        },
                    ].reverse()
                );
            });
        },
        [uploadingFiles]
    );

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
    } = useDropzone({
        onDrop,
        accept: "image/jpeg, image/png, image/gif, video/mp4, video/webm, application/pdf, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.rar",
        maxSize: 5000000,
    });

    const fileStyle = useMemo(() => {
        return `bg-white border border-graytext flex flex-col items-center p-5 rounded-sm border-dashed cursor-pointer
        
        ${isDragActive && "border-file-active"}
        ${isDragAccept && "border-file-accept"}
        ${isDragReject && "border-file-reject"}
        
        `;
    }, [isDragActive, isDragAccept, isDragReject]);

    return (
        <div className="mt-10">
            <div {...getRootProps()} className={fileStyle}>
                <input {...getInputProps()} type="text" />
                <div className="flexCenter flex-col text-center">
                    <p className="font-poppins  text-graytext font-semibold text-xl">
                        Jpg, Png, Gif, Mp4, Excel or Word Document up to 10MB
                    </p>
                    <div className="my-5 w-full flex justify-center">
                        <img
                            width={60}
                            height={60}
                            alt="file Upload"
                            className="light"
                            src={AppIcons.uploadIcon}
                        />
                    </div>
                    <p className="font-poppins  text-graytext font-semibold text-xm">
                        Drag and Drop File
                    </p>
                    <p className="font-poppins  text-graytext font-semibold text-xm mt-2">
                        or browse media on your device
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UploadAttachmentModalUploads;
