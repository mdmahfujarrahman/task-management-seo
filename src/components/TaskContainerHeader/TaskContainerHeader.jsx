const TaskContainerHeader = () => {
    return (
        <div className="flex justify-between p-2 items-center ">
            <div className="flex items-center">
                <div className="h-6 w-5 bg-primary rounded-l-full mr-2" />
                <p>Incomplete</p>
            </div>
            <div className="bg-graybg flexCenter h-8 w-8 rounded-sm">0</div>
        </div>
    );
};

export default TaskContainerHeader;
