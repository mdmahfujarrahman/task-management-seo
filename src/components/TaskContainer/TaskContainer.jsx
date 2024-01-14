import { useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import TaskContainerHeader from "../TaskContainerHeader/TaskContainerHeader";
import UploadAttachmentModal from "../UploadAttachmentModal/UploadAttachmentModal";

const TaskContainer = ({ task }) => {
    const [modalopen, setModalOpen] = useState(false);
    const handleClose = () => setModalOpen(false);

    

    const getsingleTask = (id) => {
        console.log(id);
        setModalOpen(true);
    };

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
                        key={singleTask?.id}
                        singleTask={singleTask}
                    />
                ))}
            </div>
            <UploadAttachmentModal show={modalopen} handleClose={handleClose} />
        </div>
    );
};

export default TaskContainer;
