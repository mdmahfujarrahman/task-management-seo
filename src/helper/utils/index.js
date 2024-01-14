import { AppIcons } from "../../assets/icon";

export function getFileIcon(fileType) {
    switch (fileType) {
        case "image/jpeg":
        case "image/png":
        case "image/gif":
            return AppIcons.imageIcon;
        case "video/mp4":
        case "video/webm":
        case "video/mkv":
            return AppIcons.videoIcon;
        case "application/pdf":
            return AppIcons.pdfIcon;
        case "application/vnd.ms-excel":
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
            return AppIcons.excelIcon;
        case "application/msword":
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            return AppIcons.wordIocn;
        case "application/vnd.rar":
            return AppIcons.rarIcon;
        default:
            return AppIcons.filesIcon;
    }
}
