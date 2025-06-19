import React, { useContext, useState } from 'react'
import Setting04Icon from '../../../component/icons/setting04'
import DotsVerticalIcon from '../../../component/icons/dots-vertical'
import Activities from './activities'
import Feeds from './feeds'
import Approvals from './approvals'
import Leaves from './leaves'
import TimeLogs from './time-logs'
import TimeSheets from './time-sheets'
import Jobs from './jobs'
import Files from './files'
import HrProcess from './hr-process-request'
import Attendance from './attendance'
import OverviewCareer from './overview-career'
import Profile from './profile'
import { GlobalContext } from '../../../context/Context'
import { Helmet } from "react-helmet";


const Overview = () => {
    let { state } = useContext(GlobalContext);

    const [tab, setTab] = useState(0);

    const CustomTab = ({ value, index, children }) => {
        return (
            <>
                {value === index && children}
            </>
        )
    }

    const onTabChange = (value) => {
        setTab(value)
    }

    return (
        <>
            <Helmet>
                <title>My Space | Overview</title>
            </Helmet>
            <div className="mainBody">
                <div className="coverPhoto">
                    <img src={`${state.basePath}/dashboard/cover-photo.jpg`} alt="" />
                </div>

                <div className="dashboardMain">
                    <div className="dashboardLeft">
                        <div className="dashboardLeft-profileArea">
                            <div className="userProfile">
                                <img src={`${state.basePath}/dashboard/content.jpg`} alt="" />
                            </div>

                            <div className="userDetail">
                                <h6>Schergeil Pervez</h6>
                                <h5>I'm a Founder and CEO Legendesk (Pvt.) Ltd.</h5>

                                <div className="userClockIn">
                                    <span>Clock-in 08:00 PM</span>
                                </div>

                                <div className="userClockInTotalTime">
                                    <span>02:02:05</span>
                                </div>

                                <div className="userClockInBtn">
                                    <button>Time Out</button>
                                </div>
                            </div>
                        </div>

                        <div className="dashboardLeft-reportees">
                            <h6>Reportees</h6>
                            <p>You've 25 members in your team</p>

                            <ul className='dashboardLeft-onlineUserList'>
                                <li>
                                    <div className="dlrUser">
                                        <em className="dot"></em>

                                        <div className="profile">
                                            <img src={`${state.basePath}/dashboard/clockin-vatar.png`} alt="" />
                                            <span></span>
                                        </div>

                                        <div className="dlrdetail">
                                            <span className="dlrtitle">Phoenix Baker</span>
                                            <em className="dlrtitleTag">@phoenix</em>
                                        </div>
                                    </div>

                                    <div className="dlrTime">
                                        <span>5min ago</span>
                                    </div>
                                </li>

                                <li>
                                    <div className="dlrUser">
                                        <em className="dot"></em>

                                        <div className="profile">
                                            <img src={`${state.basePath}/dashboard/clockin-vatar.png`} alt="" />
                                            <span></span>
                                        </div>

                                        <div className="dlrdetail">
                                            <span className="dlrtitle">Tabish Tanveer</span>
                                            <em className="dlrtitleTag">@phoenix</em>
                                        </div>
                                    </div>

                                    <div className="dlrTime">
                                        <span>5min ago</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="dashboardRight">
                        <div className="dashboardTabing">
                            <div className="dashboardTabing-nav">
                                <div className={`dashboardTabing-navItems ${tab === 0 ? "active" : ""}`} onClick={() => { onTabChange(0) }}>
                                    <span>Activites</span>
                                </div>

                                <div className={`dashboardTabing-navItems ${tab === 1 ? "active" : ""}`} onClick={() => { onTabChange(1) }}>
                                    <span>Feeds</span>
                                </div>

                                <div className={`dashboardTabing-navItems ${tab === 2 ? "active" : ""}`} onClick={() => { onTabChange(2) }}>
                                    <span>Profile</span>
                                </div>

                                <div className={`dashboardTabing-navItems ${tab === 3 ? "active" : ""}`} onClick={() => { onTabChange(3) }}>
                                    <span>Approvals</span>
                                </div>

                                <div className={`dashboardTabing-navItems ${tab === 4 ? "active" : ""}`} onClick={() => { onTabChange(4) }}>
                                    <span>Leave</span>
                                </div>

                                <div className={`dashboardTabing-navItems ${tab === 5 ? "active" : ""}`} onClick={() => { onTabChange(5) }}>
                                    <span>Attendance</span>
                                </div>

                                <div className={`dashboardTabing-navItems ${tab === 6 ? "active" : ""}`} onClick={() => { onTabChange(6) }}>
                                    <span>Time Logs</span>
                                </div>

                                <div className={`dashboardTabing-navItems ${tab === 7 ? "active" : ""}`} onClick={() => { onTabChange(7) }}>
                                    <span>Timesheets</span>
                                </div>

                                <div className={`dashboardTabing-navItems ${tab === 8 ? "active" : ""}`} onClick={() => { onTabChange(8) }}>
                                    <span>Jobs</span>
                                </div>

                                <div className={`dashboardTabing-navItems ${tab === 9 ? "active" : ""}`} onClick={() => { onTabChange(9) }}>
                                    <span>Files</span>
                                </div>

                                <div className={`dashboardTabing-navItems ${tab === 10 ? "active" : ""}`} onClick={() => { onTabChange(10) }}>
                                    <span>HR Process</span>
                                </div>

                                <div className={`dashboardTabing-navItems ${tab === 11 ? "active" : ""}`} onClick={() => { onTabChange(11) }}>
                                    <span>Career History</span>
                                </div>

                                <div className="dashboardTabing-navMore">
                                    <div className="dashboardTabing-navMoreBtn">
                                        <DotsVerticalIcon />
                                    </div>
                                </div>
                            </div>

                            <div className="dashboardTabing-filter">
                                <div className="dashboardTabing-filterBtn">
                                    <div className="icon">
                                        <Setting04Icon />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dashboardPage">
                            {/* COMPONENT HERE */}
                            <CustomTab value={tab} index={0}>
                                <Activities />
                            </CustomTab>

                            <CustomTab value={tab} index={1}>
                                <Feeds />
                            </CustomTab>

                            <CustomTab value={tab} index={2}>
                                <Profile />
                            </CustomTab>

                            <CustomTab value={tab} index={3}>
                                <Approvals />
                            </CustomTab>

                            <CustomTab value={tab} index={4}>
                                <Leaves />
                            </CustomTab>

                            <CustomTab value={tab} index={5}>
                                <Attendance />
                            </CustomTab>

                            <CustomTab value={tab} index={6}>
                                <TimeLogs />
                            </CustomTab>

                            <CustomTab value={tab} index={7}>
                                <TimeSheets />
                            </CustomTab>

                            <CustomTab value={tab} index={8}>
                                <Jobs />
                            </CustomTab>

                            <CustomTab value={tab} index={9}>
                                <Files />
                            </CustomTab>

                            <CustomTab value={tab} index={10}>
                                <HrProcess />
                            </CustomTab>

                            <CustomTab value={tab} index={11}>
                                <OverviewCareer />
                            </CustomTab>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview
