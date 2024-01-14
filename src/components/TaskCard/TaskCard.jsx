import { AppIcons } from "../../assets/icon";
import { profileImages } from "../../assets/image";
import { TaskUser } from "../../constant";

const TaskCard = ({ singleTask, handleOpen }) => {
    return (
        <div className="w-full flex flex-col bg-white rounded-sm p-2">
            <div className="flex items-center justify-between">
                {TaskUser.slice(0, 2).map((user) => (
                    <div key={user.id} className="flex items-center">
                        <img
                            className="h-7 w-7 rounded-full mr-2"
                            src={user.image}
                            alt={user.name}
                        />
                        <p className="text-sm">{user.name}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center my-4">
                <div
                    className="flex items-center
                 "
                >
                    <img
                        src={AppIcons.stakeIcon}
                        className="h-4 w-4 mr-1"
                        alt="stake icon"
                    />
                    <p className="text-sm">{singleTask?.title}</p>
                </div>
                <div className="flex items-center justify-center bg-graybg w-14 h-6 p-2 rounded-sm">
                    <img
                        className="h-4 w-4 mr-1"
                        src={AppIcons.projectIcon}
                        alt="project icon"
                    />
                    <p className="text-sm">1/2</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex">
                    <img
                        src={profileImages[2]}
                        className="h-7 w-7 rounded-full"
                        alt=""
                    />
                </div>
                <div className="flex">
                    <img
                        src={profileImages[3]}
                        className="h-7 w-7 rounded-full"
                        alt=""
                    />
                </div>
                <div className="flexCenter h-8 w-8 rounded-full bg-graybg">
                    <p className="text-sm">
                        <span className="font-semibold"> 12</span>+
                    </p>
                </div>
                <div className="flex items-center gap-1">
                    <img
                        src={AppIcons.chatIcon}
                        alt="chatIcon"
                        className="h-4 w-4"
                    />
                    <p className="text-sm">15</p>
                </div>
                <div className="flex items-center gap-1">
                    <img
                        src={AppIcons.attachmentIcon}
                        alt="chatIcon"
                        className="h-4 w-4 cursor-pointer"
                        onClick={() => handleOpen(singleTask)}
                    />
                    <p className="text-sm">{singleTask?.attachment?.length}</p>
                </div>
                <div className="flex items-center gap-1">
                    <img
                        src={AppIcons.calenderIcon}
                        alt="chatIcon"
                        className="h-4 w-4"
                    />
                    <p className="text-sm">30-12-2022</p>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
