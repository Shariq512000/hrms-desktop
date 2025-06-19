import React from 'react'

const LeftSidePopupLayout = ({ tabs, onClose, onToggle, children, className, style }) => {
    return (
        <div className={`modal-overlay`} onClick={onClose} style={style}>
            <div className={`customize-modal ${className}`} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default LeftSidePopupLayout
