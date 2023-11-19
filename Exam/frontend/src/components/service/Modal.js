export const Modal = ({ isOpen, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className='my-modal-window'>
            <div className='my-modal-window-content'>
                {children}
            </div>
        </div>
    );
};