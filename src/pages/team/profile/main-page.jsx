import React, { useContext, useState } from 'react'
import { Link } from 'react-router'
import Home1Icon from '../../../component/icons/home1'
import ArrowRightIcon from '../../../component/icons/arrow-right'
import Star1Icon from '../../../component/icons/star-1'
import PhoneCall1Icon from '../../../component/icons/phone-call-1'
import MessageChatSquareIcon from '../../../component/icons/message-chat-square'
import VideoRecorderIcon from '../../../component/icons/video-recorder'
import DotHorizontalIcon from '../../../component/icons/dot-horizontal'
import VerifiedTickIcon from '../../../component/icons/verified-tick'
import Dataflow4Icon from '../../../component/icons/dataflow-4'
import DotsVerticalIcon from '../../../component/icons/dots-vertical'
import Setting04Icon from '../../../component/icons/setting04'
import TeamProfileMain from '.'
import CareerHistoryTeam from './career-history'
import TeamDepartmentTab from './department'
import PeersTeam from './peers'
import LeaveTeam from './leave'
import AttendanceTeam from './attendance'
import { GlobalContext } from '../../../context/Context'
import { Helmet } from 'react-helmet'

const TeamMainPage = () => {
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
        <title>Team | Profiles</title>
      </Helmet>
      <div className="webBody" style={{ paddingRight: '0' }}>
        <div className="mainBody" style={{ height: 'calc(100vh - 55px)' }}>
          <div className="teamProfile__dashboard">
            <div className="teamProfile__dashboard-breadcrum">
              <ul>
                <li>
                  <Link to={''}>
                    <div className="icon">
                      <Home1Icon />
                    </div>
                    <span>My Team</span>
                  </Link>
                </li>

                <li>
                  <p>
                    <div className="icon">
                      <ArrowRightIcon />
                    </div>
                    <span>User's Profile</span>
                  </p>
                </li>
              </ul>
            </div>

            <div className="teamProfile__dashboard-main">
              <div className="teamProfile__dashboard-coverPhoto">
                <img src={`${state.basePath}/team/cover-photo.jpg`} alt="" />

                <div className="teamProfile__dashboard-coverPhoto-action">
                  <div className='tpd-coverPhoto-action-list'>
                    <div className="tpd-coverPhoto-action-list-items">
                      <span>
                        <Star1Icon />
                      </span>
                    </div>

                    <div className="tpd-coverPhoto-action-list-items">
                      <span>
                        <PhoneCall1Icon />
                      </span>
                    </div>

                    <div className="tpd-coverPhoto-action-list-items">
                      <span>
                        <MessageChatSquareIcon />
                      </span>
                    </div>

                    <div className="tpd-coverPhoto-action-list-items">
                      <span>
                        <VideoRecorderIcon />
                      </span>
                    </div>

                    <div className="tpd-coverPhoto-action-list-items">
                      <span>
                        <DotHorizontalIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`teamProfile__dashboard-body`} >
                <div className="teamProfile__dashboard-userData">
                  <div className="tpd-userDetail">
                    <div className="tpd-userDetail-left">
                      <div className="profile">
                        <span>
                          <img src={`${state.basePath}/team/team-user-profile.png`} alt="" />
                        </span>

                        <div className="verifiedTick">
                          <VerifiedTickIcon />
                        </div>
                      </div>

                      <div className="userProfile_detail">
                        <h6>2025001 - Subhan Khatri <span>out</span></h6>
                        <p>Checked out at 09:33 PM</p>
                        <p>Cinematographer & Video Editor</p>
                      </div>
                    </div>

                    <div className="tpd-userDetail-right">
                      <div className="icon">
                        <Dataflow4Icon />
                      </div>

                      <div className="details">
                        <h5>Reoirting To</h5>
                        <p>1 - Schergeil Parvez</p>
                      </div>

                      <div className="profile">
                        <img src={`${state.basePath}/dashboard/avatar_phoenix_baker.png`} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="dashboardTabing">
                    <div className="dashboardTabing-nav">
                      <div className={`dashboardTabing-navItems ${tab === 0 ? "active" : ""}`} onClick={() => { onTabChange(0) }}>
                        <span>Profile</span>
                      </div>

                      <div className={`dashboardTabing-navItems ${tab === 1 ? "active" : ""}`} onClick={() => { onTabChange(1) }}>
                        <span>Career History</span>
                      </div>

                      <div className={`dashboardTabing-navItems ${tab === 2 ? "active" : ""}`} onClick={() => { onTabChange(2) }}>
                        <span>Department</span>
                      </div>

                      <div className={`dashboardTabing-navItems ${tab === 3 ? "active" : ""}`} onClick={() => { onTabChange(3) }}>
                        <span>Peers</span>
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
                </div>


                <div className={`teamProfile__dashboard-contentArea `}>
                  <CustomTab value={tab} index={0}>
                    <TeamProfileMain />
                  </CustomTab>

                  <CustomTab value={tab} index={1}>
                    <CareerHistoryTeam />
                  </CustomTab>

                  <CustomTab value={tab} index={2}>
                    <TeamDepartmentTab />
                  </CustomTab>

                  <CustomTab value={tab} index={3}>
                    <PeersTeam />
                  </CustomTab>

                  <CustomTab value={tab} index={4}>
                    <LeaveTeam />
                  </CustomTab>

                  <CustomTab value={tab} index={5}>
                    <AttendanceTeam />
                  </CustomTab>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamMainPage
