import React from 'react';
import "../../styles/component/popup/CustomizeTabsModal.css";
import LeftSidePopupLayout from './left-side-popup-layout';
import XCloseIcon from '../icons/x-close';
import InformationFillIcon from '../icons/information-fill';



const AboutMePopup = ({ onClose, data, style }) => {
  return (
    <LeftSidePopupLayout onClose={onClose} className={`addMeModal`}>
      <div className="modal-header addMeModal-head">
        <h4>About Me</h4>

        <button onClick={onClose} className="close-btn"><XCloseIcon /></button>
      </div>

      <div className="modal-body addMeModal-body">
        <div className="dcmb__card">
          <div className="dcmb__cardBody">
            <div className="dcmb__cardBody-formArea">
              <div className="dcmb__cardBody-formArea-feild">
                <textarea placeholder='Describe yourself...'></textarea>
                <span><b><InformationFillIcon /></b> It will be displayed on your profile.</span>
              </div>
            </div>
          </div>

          <div className="dcmb__cardFoot">
            <button className="dcmb__cancel" onClick={onClose}>Discard</button>
            <button className="dcmb__submit">Apply Changes</button>
          </div>
        </div>
      </div>
    </LeftSidePopupLayout>
  )
}

export default AboutMePopup
