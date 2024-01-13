import TaskCard from "../TaskCard/TaskCard";
import TaskContainerHeader from "../TaskContainerHeader/TaskContainerHeader";

const TaskContainer = () => {
    return (
        <div className="flex flex-col bg-quinary  w-[360px]">
            <div className="p-2">
                <TaskContainerHeader />
            </div>
            <div className="flex flex-col  rounded-sm p-2  overflow-y-scroll  gap-5">
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>
        </div>
    );
};

export default TaskContainer;
