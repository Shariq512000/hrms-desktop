import React from 'react';
import "../../styles/component/popup/CustomizeTabsModal.css";
import XCloseIcon from '../icons/x-close';
import LeftSidePopupLayout from './left-side-popup-layout';



const CustomizeTabsPopup = ({ tabs, onClose, onToggle, data }) => {
  return (
    <LeftSidePopupLayout tabs={tabs} onClose={onClose} onToggle={onToggle}>
      <div className="modal-header">
        <h4>Customize Tabs</h4>
        <button onClick={onClose} className="close-btn"><XCloseIcon /></button>
      </div>

      <div className="modal-body">
        {data.map((tab) => (
          <div className="tab-toggle" key={tab}>
            <span>{tab}</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={tabs?.[tab] || false}
                onChange={() => onToggle(tab)}
              />
              <span className="slider round">
                <div className="sliderCenterCircle"></div>
              </span>
            </label>
          </div>
        ))}
      </div>
    </LeftSidePopupLayout>
  )
}

export default CustomizeTabsPopup
