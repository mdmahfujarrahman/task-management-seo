const TaskContainerHeader = ({ title, totalTask }) => {
    return (
        <div className="flex justify-between p-2 items-center ">
            <div className="flex items-center">
                <div
                    className={`h-6 w-5 rounded-l-full mr-2 ${
                        title === "Incomplete"
                            ? "bg-quaternary"
                            : title === "To Do"
                            ? "bg-secondary"
                            : title === "Doing"
                            ? "bg-tertiary"
                            : "hidden"
                    }`}
                />
                <p>{title}</p>
            </div>
            <div className="bg-graybg flexCenter h-8 w-8 rounded-sm">
                {totalTask}
            </div>
        </div>
    );
};

export default TaskContainerHeader;
