import { useContext, useMemo, useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import TaskContainerHeader from "../TaskContainerHeader/TaskContainerHeader";
import UploadAttachmentModal from "../UploadAttachmentModal/UploadAttachmentModal";
import { uploadMultipleFile } from "../../helper/upload/fileUpload";
import { AppContext } from "../../context/AppContext";

const TaskContainer = ({ task }) => {
    const [isUploadDone, setIsUploadDone] = useState(false);
    const [uploadingFiles, setUploadingFiles] = useState([]);
    const { updateTask, setIsLoading } = useContext(AppContext);
    const [singleTask, setSingleTask] = useState({});
    const [modalopen, setModalOpen] = useState(false);
    const handleClose = () => setModalOpen(false);

    const getsingleTask = (id) => {
        setSingleTask(id);
        setModalOpen(true);
    };

    const handleUpload = async () => {
        if (uploadingFiles.length === 0) {
            alert("Please select file");
            return;
        }

        try {
            setIsLoading(true);
            // Upload all files in parallel
            await Promise.all(
                uploadingFiles.map(async (file) => {
                    return await uploadMultipleFile(
                        file.id,
                        file.file,
                        setUploadingFiles
                    );
                })
            );

            setTimeout(() => {
                setIsUploadDone(true);
            }, 1000);

            // Call your API here
        } catch (error) {
            console.error("Error uploading files:", error);
        }
    };

    useMemo(() => {
        if (!modalopen) {
            setUploadingFiles([]);
        }
    }, [modalopen]);

    useMemo(() => {
        if (isUploadDone) {
            updateTask(task, singleTask, uploadingFiles, handleClose);
            setIsUploadDone(false);
        }
    }, [isUploadDone]);

    return (
        <div className="flex flex-col h-screen bg-quinary  w-[360px]">
            <div className="p-2">
                <TaskContainerHeader
                    totalTask={task?.task?.length}
                    title={task?.title}
                />
            </div>
            <div className="flex flex-col h-screen  rounded-sm p-2  overflow-y-scroll  gap-5">
                {task.task.map((singleTask) => (
                    <TaskCard
                        handleOpen={getsingleTask}
                        key={singleTask?._id}
                        singleTask={singleTask}
                    />
                ))}
            </div>
            <UploadAttachmentModal
                show={modalopen}
                handleClose={handleClose}
                handleUpload={handleUpload}
                uploadingFiles={uploadingFiles}
                setUploadingFiles={setUploadingFiles}
            />
        </div>
    );
};

export default TaskContainer;
