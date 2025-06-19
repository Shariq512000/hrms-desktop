import React, { useContext } from 'react';
import "../../styles/component/popup/CustomizeTabsModal.css";
import LeftSidePopupLayout from './left-side-popup-layout';
import { GlobalContext } from '../../context/Context';
import XCloseIcon from '../icons/x-close';
import DotsVerticalIcon from '../icons/dots-vertical';



const DepartmentChangePopup = ({ onClose, data, style }) => {
  let { state } = useContext(GlobalContext);
  return (
    <LeftSidePopupLayout onClose={onClose} className={`departmentChangeModal`}>
      <div className="modal-header departmentChangeModal-head">
        <h4>Department Change</h4>

        <button onClick={onClose} className="close-btn"><XCloseIcon /></button>
      </div>

      <div className="modal-body departmentChangeModal-body">
        <div className="dcmb__card">
          <div className="dcmb__cardHead">
            <h6>HR Process request details</h6>

            <div className="moreAction">
              <div className="moreActionBtn">
                <div className="icon"><DotsVerticalIcon /></div>
              </div>
            </div>
          </div>

          <div className="dcmb__cardBody">
            <h6>Employee:</h6>

            <div className="dcmb__cardBody-userProfileArea">
              <div className="profile">
                <img src={`${state.basePath}/popup/profile.png`} alt="" />
                <span className="online_indicator"></span>
              </div>

              <div className="detail">
                <h4>1 - Schergeil Parvez</h4>
                <a href="mailto:">schergeilsheikh@gmail.com</a>
              </div>
            </div>

            <div className="dcmb__cardBody-formArea">
              <div className="dcmb__cardBody-formArea-feild">
                <label htmlFor="">Select new Department:</label>

                <select>
                  <option value="0" selected disabled>Select</option>
                  <option value="1">Software Department</option>
                </select>
              </div>

              <div className="dcmb__cardBody-formArea-feild">
                <label htmlFor="">Select new Location:</label>

                <select>
                  <option value="0" selected disabled>Select</option>
                </select>
              </div>

              <div className="dcmb__cardBody-formArea-feild">
                <label htmlFor="">Select new Reporting Manager:</label>

                <select>
                  <option value="0" selected disabled>Select</option>
                </select>
              </div>

              <div className="lineBreak"></div>

              <h6>Process date and reason</h6>

              <div className="dcmb__cardBody-formArea-feild">
                <label htmlFor="">Select effective date:</label>

                <input type="date" />
              </div>

              <div className="dcmb__cardBody-formArea-feild">
                <label htmlFor="">Enter the reason for change:</label>

                <textarea placeholder='Enter the reason for change:'></textarea>
              </div>
            </div>
          </div>

          <div className="dcmb__cardFoot">
            <button className="dcmb__cancel" onClick={onClose}>Cancel</button>
            <button className="dcmb__submit">Submit</button>
          </div>
        </div>
      </div>
    </LeftSidePopupLayout>
  )
}

export default DepartmentChangePopup
