import React, { useContext } from 'react'
import ArrowDownsLineIcon from '../../../component/icons/arrow-downs-line';
import SortDescIcon from '../../../component/icons/sort-desc';
import Filter3FillIcon from '../../../component/icons/filter-3-fill';
import { GlobalContext } from '../../../context/Context';
import { Helmet } from 'react-helmet';

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
                    <img src={`${state.basePath}/${item.avatar}`} alt="avatar" className="avatar" />
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

const TeamApprovals = () => {
    return (
        <>
            <Helmet>
                <title>Team | Approvals</title>
            </Helmet>
            <div className="mainBody approvalPage">
                <div className="birthday_page approvalCard">
                    <div className="birthday_page-filter">
                        <div className="birthday_page-filter-left">
                            <div className="bpfl-select">
                                <select>
                                    <option value="0">Pending</option>
                                </select>
                                <span>Status :</span>
                            </div>

                            <div className="bpfl-select">
                                <select>
                                    <option value="0">All Active Employee Request</option>
                                </select>
                                <span>Employee Status :</span>
                            </div>
                        </div>
                        <div className="birthday_page-filter-right">
                            <div className="bpfl-action">
                                <div className="bpfl-actionItems">
                                    <div className="bpfl-actionBtn">
                                        <div className="icon">
                                            <Filter3FillIcon />
                                        </div>

                                        Filter
                                    </div>
                                </div>

                                <div className="bpfl-actionItems">
                                    <div className="bpfl-actionBtn">
                                        <div className="icon">
                                            <SortDescIcon />
                                        </div>

                                        Sort By

                                        <div className="selectDropIcon">
                                            <ArrowDownsLineIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="approvals-list card">
                        {approvals.map((item) => (
                            <ApprovalCard item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamApprovals
