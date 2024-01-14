export const initialState = {
    uploadingFiles: [],
};

const updateUploadIngFiles = (state = initialState, action) => {
    switch (action.type) {
        case "UPLOADING_FILE":
            return {
                ...state,
                uploadingFiles: action.payload,
            };
        case "REMOVE_UPLOADING_FILE":
            return {
                ...state,
                uploadingFiles: action.payload,
            };
        default:
            return state;
    }
};

export default updateUploadIngFiles;
