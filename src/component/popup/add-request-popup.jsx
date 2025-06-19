import React, { useState } from 'react';
import "../../styles/component/popup/CustomizeTabsModal.css";
import LeftSidePopupLayout from './left-side-popup-layout';
import XCloseIcon from '../icons/x-close';
import ExpandUpDownFillIcon from '../icons/expand-up-down-fill';



const AddRequestPopup = ({ onClose, data, style }) => {

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');

  return (
    <LeftSidePopupLayout onClose={onClose} className={`departmentChangeModal`}>
      <div className="modal-header departmentChangeModal-head">
        <h4>Add Request</h4>

        <button onClick={onClose} className="close-btn"><XCloseIcon /></button>
      </div>

      <div className="modal-body departmentChangeModal-body">
        <div className="dcmb__card">
          <div className="dcmb__cardBody">
            <div className="dcmb__cardBody-formArea">
              <div className="dcmb__cardBody-formArea-feild">
                <label htmlFor="">Period</label>
                <select>
                  <option value="0" selected disabled>Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>

              <div className="dcmb__cardBody-formArea-feild">
                <label htmlFor="">Date:</label>
                <input type="date" />
              </div>

              <div className="dcmb__cardBody-formArea-table">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <div className="tableHeading">
                          <span className=''>Working Day</span>
                          <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                        </div>
                      </th>
                      <th>
                        <div className="tableHeading">
                          <span className=''>Check-in</span>
                          <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                        </div>
                      </th>
                      <th>
                        <div className="tableHeading">
                          <span className=''>Check-out</span>
                          <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                        </div>
                      </th>
                      <th>
                        <div className="tableHeading">
                          <span className=''>Total Hours</span>
                          <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                        </div>
                      </th>
                      <th>
                        <div className="tableHeading">
                          <span className=''>Reason</span>
                          <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                        </div>
                      </th>
                      <th>
                        <div className="tableHeading">
                          <span className=''>Description</span>
                          <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td><label>May 05, Mon</label></td>
                      <td>
                        <input
                          type="datetime-local"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                        />
                      </td>

                      <td>
                        <input
                          type="datetime-local"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                        />
                      </td>

                      <td>
                        8:45 Hrs
                      </td>

                      <td>
                        <select value={reason} onChange={(e) => setReason(e.target.value)}>
                          <option>Select</option>
                          <option>Work</option>
                          <option>Meeting</option>
                          <option>Training</option>
                        </select>
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default AddRequestPopup
