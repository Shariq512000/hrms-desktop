import React from 'react';
import "../../styles/component/popup/CustomizeTabsModal.css";
import LeftSidePopupLayout from './left-side-popup-layout';
import XCloseIcon from '../icons/x-close';
import InformationFillIcon from '../icons/information-fill';



const LeavePopup = ({ onClose, data, style }) => {
  return (
    <LeftSidePopupLayout onClose={onClose} className={`addMeModal leaveModal`}>
      <div className="modal-body addMeModal-body">
        <div className="dcmb__card">
          <div className="dcmb__cardBody">
            <div className="dcmb__cardBody-formArea">
              <div className="dcmb__cardBody-formArea-feild">
                <label htmlFor="">Leave type</label>
                <select>
                  <option value="1">Annual Leave</option>
                  <option value="2">Casual Leave</option>
                  <option value="3">Sick Leave</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-header addMeModal-head">
        <h4>Apply Leave</h4>

        <button onClick={onClose} className="close-btn"><XCloseIcon /></button>
      </div>

      <div className="leaveModal-heading">
        <h3>Leave </h3>
      </div>

      <div className="modal-body addMeModal-body">
        <div className="dcmb__card">
          <div className="dcmb__cardBody">
            <div className="dcmb__cardBody-formArea">
              <div className="dcmb__cardBody-formArea-feild">
                <label htmlFor="">Date</label>

                <div className="dcmb__cardBody-formArea-feild2">
                  <input type="date" placeholder='Type Here' />
                  <input type="date" placeholder='Type Here' />
                </div>
              </div>

              <div className="dcmb__cardBody-formArea-feild">
                <label htmlFor="">Team Email ID</label>
                <input type="text" placeholder='Type Here' />
              </div>

              <div className="dcmb__cardBody-formArea-feild">
                <label htmlFor="">Reason for Leave</label>
                <textarea placeholder='Describe yourself...'></textarea>
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

export default LeavePopup
