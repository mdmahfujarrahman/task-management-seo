import TaskCard from "../TaskCard/TaskCard";
import TaskContainerHeader from "../TaskContainerHeader/TaskContainerHeader";

const TaskContainer = ({ task }) => {
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
                    <TaskCard key={singleTask?.id} singleTask={singleTask} />
                ))}
            </div>
        </div>
    );
};

export default TaskContainer;
