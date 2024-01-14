import CustomModal from "../UI/CustomModal/CustomModal";
import UploadAttachmentModalUploads from "./UploadAttachmentModalUploads";

const UploadAttachmentModal = ({ show, handleClose }) => {
    return (
        <CustomModal
            show={show}
            handleClose={handleClose}
            title="Upload Attacment"
        >
            <div>
                <UploadAttachmentModalUploads show={show} handleClose={handleClose} />
            </div>
        </CustomModal>
    );
};

export default UploadAttachmentModal;
