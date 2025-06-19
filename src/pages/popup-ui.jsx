import React, { useState } from 'react'
import { Link } from 'react-router';
import CustomizeTabsPopup from '../component/popup/customize-tabs-popup';
import ManageAccountPopup from '../component/popup/manage-account-popup'
import DepartmentChangePopup from '../component/popup/department-change-popup';
import AddRequestPopup from '../component/popup/add-request-popup';
import AboutMePopup from '../component/popup/about-me-popup';
import LeavePopup from '../component/popup/leave-popup';

const initialTabs = {
  Feeds: true,
  Profile: true,
  Approvals: true,
  Leaves: true,
  // ...etc
};

const tabItems = [
  "Feeds", "Profile", "Approvals", "Leaves", "Time Logs", "Timesheets",
  "Jobs", "Files", "HR Process", "Careers History", "HR Help Desk", "Goals", "Feedback",
];


const PopupUI = () => {
  const [tabsCustomizeTabs, setTabsCustomizeTabs] = useState(initialTabs);
  const [showModalCustomizeTabs, setShowModalCustomizeTabs] = useState(false);

  const [showModalManageAccount, setShowModalManageAccount] = useState(false);
  const [showModalDepartmentChange, setShowModalDepartmentChange] = useState(false);
  const [showModalAddRequest, setShowModalAddRequest] = useState(false);
  const [showModalAbourMe, setShowModalAbourMe] = useState(false);
  const [showModalLeave, setShowModalLeave] = useState(false);

  
  return (
    <div style={{padding : '20px'}}>
      <div style={{textAlign: 'center', display : 'flex', flexDirection : 'column', gap : '15px'}}>
        <Link className="btn" type='button' onClick={() => {setShowModalCustomizeTabs(true)}}>Customize Tabs Popup</Link>
        <Link className="btn" type='button' onClick={() => {setShowModalManageAccount(true)}}>Manage Account Popup</Link>
        <Link className="btn" type='button' onClick={() => {setShowModalDepartmentChange(true)}}>Department Change Popup</Link>
        <Link className="btn" type='button' onClick={() => {setShowModalAddRequest(true)}}>Add Request Popup</Link>
        <Link className="btn" type='button' onClick={() => {setShowModalAbourMe(true)}}>About Me Popup</Link>
        <Link className="btn" type='button' onClick={() => {setShowModalLeave(true)}}>Leave Popup</Link>
      </div>

      {showModalCustomizeTabs &&
        <CustomizeTabsPopup
          data={tabItems}
          tabs={tabsCustomizeTabs}
          onClose={() => setShowModalCustomizeTabs(false)}
          onToggle={(tabName) => {
            setTabsCustomizeTabs((prev) => ({
              ...prev,
              [tabName]: !prev[tabName],
            }));
          }}
        />
      }

      {
        showModalManageAccount &&
        <ManageAccountPopup
          onClose={() => setShowModalManageAccount(false)}
        />
      }

      {
        showModalDepartmentChange &&
        <DepartmentChangePopup 
          onClose={() => setShowModalDepartmentChange(false)}
        />
      }

      {
        showModalAddRequest &&
        <AddRequestPopup 
          onClose={() => setShowModalAddRequest(false)}
        />
      }

      {
        showModalAbourMe &&
        <AboutMePopup
          onClose={() => setShowModalAbourMe(false)}
        />
      }

      {
        showModalLeave &&
        <LeavePopup
          onClose={() => setShowModalLeave(false)}
        />
      }
    </div>
  )
}

export default PopupUI
