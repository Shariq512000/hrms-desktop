import React, { useContext } from 'react'
import DotsVerticalIcon from '../../../component/icons/dots-vertical';
import { GlobalContext } from '../../../context/Context';

const Approvals = () => {

  const approvals = [
    {
      id: 1,
      serial: "S11",
      user: "Taimoor Ansari",
      request: "has made a request for HR Process",
      date: "Feb 22, 2025",
      avatar: 'dashboard/header_avatar.png',
    },
    {
      id: 2,
      serial: "S11",
      user: "Taimoor Ansari",
      request: "has made a request for HR Process",
      date: "Feb 22, 2025",
      avatar: 'dashboard/header_avatar.png',
    },
    {
      id: 3,
      serial: "S11",
      user: "Taimoor Ansari",
      request: "has made a request for HR Process",
      date: "Feb 22, 2025",
      avatar: 'dashboard/header_avatar.png',
    },
    {
      id: 4,
      serial: "S11",
      user: "Taimoor Ansari",
      request: "has made a request for HR Process",
      date: "Feb 22, 2025",
      avatar: 'dashboard/header_avatar.png',
    },
  ];

  function ApprovalCard({ item }) {
    let { state } = useContext(GlobalContext);

    return (
      <div className="approval-card">
        <div className="main-info">
          <div className="approval-checkbox">
            <input type="checkbox" />
          </div>
          <div className="approval-info">
            <img src={`${state.basePath}/${item.avatar}`} alt="avatar1" className="avatar" />
            <div className="approval-details">
              <p className="user"><span>{item.serial}</span> {item.user}</p>
              <p className="request">{item.request}</p>
            </div>
          </div>
        </div>
        <div className="approval-date">
          <div className="raised-label">Raised On</div>
          <div className="date">{item.date}</div>
        </div>
      </div>
    );
  }

  return (
    <div className='approvalPage'>
      <div className="card approvalCard">
        <div className="headSec">
          <h3 className='main'>Approvals <span>(08)</span></h3>
          <div className="welcomeCard-more">
            <div className="welcomeCard-moreBtn">
              <DotsVerticalIcon />
            </div>
          </div>
        </div>

        <div className="approvals-list">
          {approvals.map((item) => (
            <ApprovalCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Approvals;