import { useDropzone } from "react-dropzone";

import { AppIcons } from "../../assets/icon";
import { useCallback, useMemo, useState } from "react";
import CustomButton from "../UI/CustomButton/CustomButton";
import { formatFileSize } from "../../helper/upload/fileUpload";
import { getFileIcon } from "../../helper/utils";

const UploadAttachmentModalUploads = ({ handleClose, show }) => {
    const [uploadingFiles, setUploadingFiles] = useState([]); // [{id: 1, file: file}
    // const [fileUrl, setFileUrl] = useState(null);

    const filtersAcceptedFileHelper = (files) => {
        const filters = files.filter((file) => !uploadingFiles.includes(file));
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
                console.log(file);
                setUploadingFiles((prev) => [
                    ...prev,
                    { id: file.name, file, isUploaded: false },
                ]);
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

    useMemo(() => {
        if (!show) {
            setUploadingFiles([]);
        }
    }, [show]);

    console.log(uploadingFiles?.length);

    return (
        <div className="mt-10">
            <div {...getRootProps()} className={fileStyle}>
                <input {...getInputProps()} type="text" />
                <div className="flexCenter flex-col text-center">
                    <p className="font-poppins  text-graytext font-semibold text-xl">
                        Jpg, Png, Gif, Mp4, Excel or Word Document up to 10MB
                    </p>
                    <div className="my-12 w-full flex justify-center">
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
            <div className="flex w-full my-3">
                <div className="flex flex-col gap-2 w-full">
                    {uploadingFiles.map((file) => (
                        <div
                            key={file.id}
                            className="animate-zoom-in opacity-0 flex rounded-md items-center justify-center border-[1px] py-2 border-graybg"
                        >
                            <div className="p-1">
                                <img
                                    width={50}
                                    height={50}
                                    src={getFileIcon(file?.file?.type)}
                                />
                            </div>
                            <div className="flex flex-col w-[90%]">
                                <p>{file?.file?.name}</p>
                                <small>
                                    {formatFileSize(file?.file?.size)}
                                </small>
                                {/* <div className="progressContentProg">
                                <LinearProgress
                                    variant="determinate"
                                    value={item?.progress?.replace("%", "")}
                                />
                                <p>{item?.progress}</p>
                            </div> */}
                            </div>
                            <div className="flex mr-1">
                                <img
                                    width={30}
                                    height={30}
                                    className="cursor-pointer"
                                    src={AppIcons.deleteIocn}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end gap-4 mt-10">
                <CustomButton className="inline-flex justify-center rounded-md border border-transparent bg-secondary px-4 py-2 text-sm font-medium text-white  hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                    Upload
                </CustomButton>
                <CustomButton
                    onClick={handleClose}
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                    Cancel
                </CustomButton>
            </div>
        </div>
    );
};

export default UploadAttachmentModalUploads;
