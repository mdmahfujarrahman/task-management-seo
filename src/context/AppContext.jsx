import { createContext, useEffect, useState } from "react";
import { AppService } from "../services/appServices";

export const AppContext = createContext();

const StoreProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [TaskDatas, setTaskDatas] = useState([]);

    const getTaskDatas = async () => {
        const res = await AppService.getAllTask();
        setTaskDatas(res?.data?.data);
    };

    const updateTask = async (taskId, singleTask, Allfile, handleClose) => {
        try {
            const payload = {
                mainTaskId: taskId._id,
                taskId: singleTask._id,
                attachment: Allfile.map((file) => file.uploadLink),
            };

            const res = await AppService.updateTask(payload);
            const updatedTask = TaskDatas.map((task) => {
                if (task._id === res?.data?.data?._id) {
                    return res?.data?.data;
                }
                return task;
            });
            handleClose();
            setIsLoading(false);
            setTaskDatas(updatedTask);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTaskDatas();
    }, []);

    return (
        <AppContext.Provider
            value={{ TaskDatas, updateTask, isLoading, setIsLoading }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default StoreProvider;
