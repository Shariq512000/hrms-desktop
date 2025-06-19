import React from 'react'
import ThemeDropdown from '../../component/ui/form/theme-dropdown'
import Rows3Icon from '../../component/icons/rows-3'
import DotsHorizontalIcon from '../../component/icons/dots-horizontal'
import ExpandUpDownFillIcon from '../../component/icons/expand-up-down-fill'
import ArrowRightLineIcon from '../../component/icons/arrow-right-line'
import ArrowLeftLineIcon from '../../component/icons/arrow-left-line'
import ArrowLeftDoubleLine from '../../component/icons/arrow-left-double-line'
import ArrowRightDoubleLine from '../../component/icons/arrow-right-double-line'
import { Helmet } from 'react-helmet'

const LeaveRequest = () => {
    const LEAVES = [
        {
            id: 1,
            employee: "Schergil Parvez",
            leaveType: "Annual Leave",
            type: "Paid",
            period: "23-Apr-2025 - 23-Apr-2025",
            days: "1 Day(s)",
            requestDate: "28-Apr-2025",
        },
        {
            id: 2,
            employee: "Schergil Parvez",
            leaveType: "Annual Leave",
            type: "Paid",
            period: "23-Apr-2025 - 23-Apr-2025",
            days: "1 Day(s)",
            requestDate: "28-Apr-2025",
        },
        {
            id: 3,
            employee: "Schergil Parvez",
            leaveType: "Annual Leave",
            type: "Paid",
            period: "23-Apr-2025 - 23-Apr-2025",
            days: "1 Day(s)",
            requestDate: "28-Apr-2025",
        },
    ];
    return (
        <>
            <Helmet>
                <title>Leave | Request</title>
            </Helmet>
            <div className="leaveMainPage">
                <div className='leaveTeamTabPage'>
                    <div className="upparSec">
                        <div className="leftSec">
                            <ThemeDropdown options={[{ value: "Leaves", name: "Leaves" }, { value: "Holidays", name: "Holidays" }]} />
                        </div>
                        <div className="rightSec">
                            <ThemeDropdown options={[{ value: "Annual Leaves", name: "Annual Leaves" }, { value: "Sick Leaves", name: "Sick Leaves" }]} />
                            <div className="memberBtn applyBtn">
                                <span>Apply Leaves</span>
                            </div>
                            <div className="iconBtn">
                                <Rows3Icon />
                            </div>
                            <div className="iconBtn">
                                <DotsHorizontalIcon />
                            </div>
                        </div>
                    </div>

                    <div className="requestCard">
                        <table className="leave-table">
                            <thead>
                                <tr>
                                    <th>
                                        <div className="tableHeading">
                                            <span className=''>Employee Name</span>
                                            <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="tableHeading">
                                            <span className=''>Leave Type</span>
                                            <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="tableHeading">
                                            <span className=''>Type</span>
                                            <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="tableHeading">
                                            <span className=''>Leave Peroid</span>
                                            <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="tableHeading">
                                            <span className=''>Days/hours taken</span>
                                            <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="tableHeading">
                                            <span className=''>Date of request</span>
                                            <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {LEAVES.map((leave, idx) => (
                                    <tr key={leave.id}>
                                        <td className='nameCell'>
                                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                                <input type="checkbox" />
                                                <span>
                                                    {leave.id} - {leave.employee}
                                                </span>
                                            </div>
                                        </td>
                                        <td>{leave.leaveType}</td>
                                        <td>{leave.type}</td>
                                        <td>{leave.period}</td>
                                        <td>{leave.days}</td>
                                        <td>{leave.requestDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="leave-table-footer">
                            <div className="leave-table-footer-left">
                                Page 2 of 16
                            </div>
                            <div className="leave-table-pagination">
                                <button className="leave-table-pg-btn arrow">
                                    <ArrowLeftDoubleLine />
                                </button>
                                <button className="leave-table-pg-btn arrow">
                                    <ArrowLeftLineIcon />
                                </button>
                                <button className="leave-table-pg-btn">
                                    <span>
                                        1
                                    </span>
                                </button>
                                <button className="leave-table-pg-btn leave-table-pg-btn--active">
                                    <span>
                                        2
                                    </span>
                                </button>
                                <button className="leave-table-pg-btn">
                                    <span>
                                        3
                                    </span>
                                </button>
                                <button className="leave-table-pg-btn">
                                    <span>
                                        4
                                    </span>
                                </button>
                                <button className="leave-table-pg-btn">
                                    <span>
                                        5
                                    </span>
                                </button>
                                <button className="leave-table-pg-btn">
                                    <span>
                                        ...
                                    </span>
                                </button>
                                <button className="leave-table-pg-btn">
                                    <span>
                                        16
                                    </span>
                                </button>
                                <button className="leave-table-pg-btn arrow">
                                    <ArrowRightLineIcon />
                                </button>
                                <button className="leave-table-pg-btn arrow">
                                    <ArrowRightDoubleLine />
                                </button>
                            </div>
                            <select className="leave-table-footer-select">
                                <option>7 / page</option>
                                {/* Add more options here */}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeaveRequest
