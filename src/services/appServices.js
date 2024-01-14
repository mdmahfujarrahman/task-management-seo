import axios from "axios";
const API = axios.create({
    baseURL: "https://task-management-seopageone-backend.vercel.app/api/v1",
});

const getAllTask = () => API.get(`/taskManegment/getAllTask/`);

const updateTask = (payload) =>
    API.patch(`/taskManegment/updateTask/`, payload);

export const AppService = {
    getAllTask,
    updateTask,
};
