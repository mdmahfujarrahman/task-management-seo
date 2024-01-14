import { useContext } from "react";
import { AppIcons } from "../../assets/icon";
import { formatFileSize } from "../../helper/upload/fileUpload";
import { getFileIcon } from "../../helper/utils";
import CustomButton from "../UI/CustomButton/CustomButton";
import CustomModal from "../UI/CustomModal/CustomModal";
import UploadAttachmentModalUploads from "./UploadAttachmentModalUploads";
import { AppContext } from "../../context/AppContext";

const UploadAttachmentModal = ({
    show,
    handleClose,
    uploadingFiles,
    handleUpload,
    setUploadingFiles,
}) => {
    const { isLoading } = useContext(AppContext);

    const hnadleRemove = (id) => {
        const updateUploadFiles = uploadingFiles.filter(
            (item) => item.id !== id
        );
        setUploadingFiles(updateUploadFiles);
    };

    return (
        <CustomModal
            show={show}
            handleClose={handleClose}
            title="Upload Attacment"
        >
            <div>
                <UploadAttachmentModalUploads
                    show={show}
                    handleClose={handleClose}
                    uploadingFiles={uploadingFiles}
                    setUploadingFiles={setUploadingFiles}
                />
                {uploadingFiles?.length > 0 && (
                    <div className="flex w-full my-3">
                        <div className="flex flex-col h-40 overflow-y-scroll  gap-2 w-full">
                            {uploadingFiles.map((file) => (
                                <div
                                    key={file.id}
                                    className="animate-zoom-in opacity-0 flex rounded-md items-center justify-center border-[1px] py-2 border-graybg"
                                >
                                    <div className="p-1 mr-2">
                                        <img
                                            width={50}
                                            height={50}
                                            src={getFileIcon(file?.file?.type)}
                                        />
                                    </div>
                                    <div className="flex flex-col w-[90%]">
                                        <p>{file?.file?.name}</p>
                                        <div className="flex items-center gap-3">
                                            <small>
                                                {formatFileSize(
                                                    file?.file?.size
                                                )}
                                            </small>
                                            {file?.progress && (
                                                <p
                                                    className={`h-6 w-14 flexCenter ${
                                                        file.isUploaded
                                                            ? "bg-green-500 text-white"
                                                            : "bg-graybg"
                                                    } rounded`}
                                                >
                                                    {file.isUploaded
                                                        ? "Done"
                                                        : file?.progress
                                                              ?.progress}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex mr-1">
                                        <img
                                            width={30}
                                            onClick={() =>
                                                hnadleRemove(file.id)
                                            }
                                            height={30}
                                            className="cursor-pointer"
                                            src={AppIcons.deleteIocn}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex justify-between items-center gap-4 mt-10">
                    <p>{uploadingFiles?.length} files</p>
                    <div className="flex gap-3">
                        <CustomButton
                            disabled={isLoading}
                            onClick={handleUpload}
                            className="inline-flex justify-center rounded-md border border-transparent bg-secondary px-4 py-2 text-sm font-medium text-white  hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                            {isLoading ? "Uploading" : "Upload"}
                        </CustomButton>
                        <CustomButton
                            onClick={handleClose}
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                            Cancel
                        </CustomButton>
                    </div>
                </div>
            </div>
        </CustomModal>
    );
};

export default UploadAttachmentModal;
