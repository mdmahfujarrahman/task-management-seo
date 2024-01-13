import { clsx } from "clsx";
import { layoutWidth } from "../../helper/tailwindHelper";
import TaskContainer from "../TaskContainer/TaskContainer";

const MainLayout = () => {
    return (
        <div className="p-3 h-screen">
            <div className="w-full mainlayouts border-[1px] overflow-hidden overflow-x-scroll border-t-2 ">
                <div
                    className={clsx(
                        `flex flex-row h-screen gap-3  overflow-x-auto`
                    )}
                    style={{
                        width: layoutWidth(5, 360),
                    }}
                >
                    <TaskContainer />
                    <TaskContainer />
                    <TaskContainer />
                    <TaskContainer />
                    <TaskContainer />
                    {/* <TaskContainer /> */}
                    {/* <TaskContainer /> */}
                    {/* <TaskContainer /> */}
                    {/* <TaskContainer />
            <TaskContainer />
            <TaskContainer />
            <TaskContainer /> */}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
