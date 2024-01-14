const CustomButton = ({ className, type, onClick, children, disabled }) => {
    return (
        <button
            disabled={disabled}
            className={className}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CustomButton;
