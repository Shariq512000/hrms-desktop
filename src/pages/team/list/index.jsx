import React, { useContext } from 'react'
import Edit2Icon from '../../../component/icons/edit-2'
import Filter3FillIcon from '../../../component/icons/filter-3-fill'
import SortDescIcon from '../../../component/icons/sort-desc'
import ArrowDownsLineIcon from '../../../component/icons/arrow-downs-line'
import ArrowRightDoubleLine from '../../../component/icons/arrow-right-double-line'
import ArrowRightLineIcon from '../../../component/icons/arrow-right-line'
import ArrowLeftLineIcon from '../../../component/icons/arrow-left-line'
import ArrowLeftDoubleLine from '../../../component/icons/arrow-left-double-line'
import ExpandUpDownFillIcon from '../../../component/icons/expand-up-down-fill'
import { GlobalContext } from '../../../context/Context'
import { Helmet } from 'react-helmet'

const datas = [
    {
        emp_id: "2025002",
        first_name: "Talib",
        last_name: "Nasir",
        perferred_name: "Talib Nasir",
        email: "syedtalib@cinecuemedia.com",
        photo: "dashboard/avatar_lana_steiner.png",
        department: "Production",
        designation: "Cinematographer & Video Editor",
        employment_type: "Permanent",
        date_of_joining: "28-Apr-2025",
        total_experience: "12 Years",
        leaveType: "Annual Leave",
        type: "Paid",
        period: "23-Apr-2025 - 23-Apr-2025",
        days: "1 Day(s)",
        requestDate: "28-Apr-2025",
    },
    {
        emp_id: "2025002",
        first_name: "Talib",
        last_name: "Nasir",
        perferred_name: "Talib Nasir",
        email: "syedtalib@cinecuemedia.com",
        photo: "dashboard/avatar_lana_steiner.png",
        department: "Production",
        designation: "Cinematographer & Video Editor",
        employment_type: "Permanent",
        date_of_joining: "28-Apr-2025",
        total_experience: "12 Years",
        leaveType: "Annual Leave",
        type: "Paid",
        period: "23-Apr-2025 - 23-Apr-2025",
        days: "1 Day(s)",
        requestDate: "28-Apr-2025",
    },
    {
        emp_id: "2025002",
        first_name: "Talib",
        last_name: "Nasir",
        perferred_name: "Talib Nasir",
        email: "syedtalib@cinecuemedia.com",
        photo: "dashboard/avatar_lana_steiner.png",
        department: "Production",
        designation: "Cinematographer & Video Editor",
        employment_type: "Permanent",
        date_of_joining: "28-Apr-2025",
        total_experience: "12 Years",
        leaveType: "Annual Leave",
        type: "Paid",
        period: "23-Apr-2025 - 23-Apr-2025",
        days: "1 Day(s)",
        requestDate: "28-Apr-2025",
    },
];

const TeamList = () => {
    let { state } = useContext(GlobalContext);

    return (
        <>
            <Helmet>
                <title>Team | Members</title>
            </Helmet>
            <div className="mainBody">
                <div className="birthday_page leaveTeamTabPage">
                    <div className="birthday_page-filter">
                        <div className="birthday_page-filter-left">
                            <div className="bpfl-select">
                                <select>
                                    <option value="0">Employee View</option>
                                </select>
                            </div>

                            <div className="bpfl-editPanel">
                                <div className="bpfl-editPanelBtn">
                                    <Edit2Icon />
                                </div>
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

                    <div className="requestCard">
                        <div className="scrollTable">
                            <table className="leave-table">
                                <thead>
                                    <tr>
                                        <th>
                                            <div className="tableHeading">
                                                <span className=''>Employee ID</span>
                                                <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="tableHeading">
                                                <span className=''>First Name</span>
                                                <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="tableHeading">
                                                <span className=''>Last Name</span>
                                                <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="tableHeading">
                                                <span className=''>Preferred Name</span>
                                                <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="tableHeading">
                                                <span className=''>Email address</span>
                                                <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="tableHeading">
                                                <span className=''>Photo</span>
                                                <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="tableHeading">
                                                <span className=''>Department</span>
                                                <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="tableHeading">
                                                <span className=''>Designation</span>
                                                <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="tableHeading">
                                                <span className=''>Employment Type</span>
                                                <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="tableHeading">
                                                <span className=''>Date of Joining</span>
                                                <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="tableHeading">
                                                <span className=''>Total Experience</span>
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
                                                <span className=''>Period</span>
                                                <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="tableHeading">
                                                <span className=''>Days</span>
                                                <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="tableHeading">
                                                <span className=''>Request -Date</span>
                                                <span className="leave-table-sort"><ExpandUpDownFillIcon /></span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {datas.map((ele, idx) => (
                                        <tr key={idx}>
                                            <td className='nameCell'>
                                                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                                    <input type="checkbox" />
                                                    <span>
                                                        {ele?.emp_id}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>{ele?.first_name}</td>
                                            <td>{ele?.last_name}</td>
                                            <td>{ele?.perferred_name}</td>
                                            <td>{ele?.email}</td>
                                            <td>
                                                <div className="userProfile-sm">
                                                    <img src={`${state.basePath}/${ele?.photo}`} alt="" />
                                                </div>
                                            </td>
                                            <td>{ele?.department}</td>
                                            <td>{ele?.first_name}</td>
                                            <td>{ele?.designation}</td>
                                            <td>{ele?.employment_type}</td>
                                            <td>{ele?.date_of_joining}</td>
                                            <td>{ele?.total_experience}</td>
                                            <td>{ele?.leaveType}</td>
                                            <td>{ele?.period}</td>
                                            <td>{ele?.days}</td>
                                            <td>{ele?.requestDate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
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

export default TeamList