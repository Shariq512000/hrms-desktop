import React, { useContext, useState } from 'react'
import VerifiedTickIcon from '../../../component/icons/verified-tick';
import DotsVerticalIcon from '../../../component/icons/dots-vertical'
import { Link } from "react-router"
import Send1 from '../../../component/icons/send-1';
import ThemeDropdown from '../../../component/ui/form/theme-dropdown';
import { GlobalContext } from '../../../context/Context';
import { Helmet } from 'react-helmet';

const TeamSpace = () => {
    let { state } = useContext(GlobalContext);

    const [tab, setTab] = useState(0);

    const onTabChange = (value) => {
        setTab(value)
    }

    return (
        <>
            <Helmet>
                <title>Team | Team Space</title>
            </Helmet>
            <div className="mainBody">
                <div className="teamSpaceDashboard">
                    <div className="teamSpaceDashboard-coverPhoto">
                        <img src={`${state.basePath}/team/cover-photo.jpg`} alt="" />
                    </div>

                    <div className="teamSpaceDashboard-main">
                        <div className="teamSpaceDashboard-leftAside">
                            <div className="tsd-la-head">
                                <div className="profile">
                                    <span>
                                        M
                                    </span>

                                    <div className="verifiedTick">
                                        <VerifiedTickIcon />
                                    </div>
                                </div>

                                <h6>Managment</h6>
                            </div>

                            <div className="tsd-la-body">
                                <div className="teamItems">
                                    <span>Team Strength</span>

                                    <div className="countTag" style={{ backgroundColor: '#C0D5FF' }}>8</div>
                                </div>

                                <h6 style={{ color: '#335CFF' }}>Team Availability</h6>

                                <div className="teamItems" style={{ borderColor: '#27A54C', marginBottom: '-12px' }}>
                                    <span>Dashboard</span>

                                    <div className="countTag">2</div>
                                </div>

                                <div className="teamItems" style={{ borderColor: '#335CFF', marginBottom: '-12px' }}>
                                    <span>Yet to Check-in</span>

                                    <div className="countTag">2</div>
                                </div>

                                <div className="teamItems" style={{ borderColor: '#FB3748' }}>
                                    <span>On Duty</span>

                                    <div className="countTag">2</div>
                                </div>

                                <h6>Location Diversity</h6>

                                <div className="teamItems">
                                    <span>On Duty</span>

                                    <div className="countTag">2</div>
                                </div>

                                <h6>Streams</h6>

                                <div className="teamItems">
                                    <span>Dept of Human Resource</span>

                                    <div className="countTag">2</div>
                                </div>

                            </div>
                        </div>

                        <div className="teamSpaceDashboard-body">
                            {/* BODY HERE */}
                            <div className="dashboardTabing">
                                <div className="dashboardTabing-nav">
                                    <div className={`dashboardTabing-navItems ${tab === 0 ? "active" : ""}`} onClick={() => { onTabChange(0) }}>
                                        <span>Department Wall</span>
                                    </div>

                                    <div className={`dashboardTabing-navItems ${tab === 1 ? "active" : ""}`} onClick={() => { onTabChange(1) }}>
                                        <span>Groups</span>
                                    </div>

                                    <div className={`dashboardTabing-navItems ${tab === 2 ? "active" : ""}`} onClick={() => { onTabChange(2) }}>
                                        <span>Surveys</span>
                                    </div>
                                </div>
                            </div>

                            <div className="postFilter">
                                <ThemeDropdown options={[{ value: "IT", name: "IT Team" }, { value: "Software", name: "Software Team" }]} />
                                <div className="users">
                                    <div className="avatarGroup">
                                        <div className="avatar">
                                            <img src={`${state.basePath}/team-space/avatar/1.png`} alt="" />
                                        </div>

                                        <div className="avatar">
                                            <img src={`${state.basePath}/team-space/avatar/2.png`} alt="" />
                                        </div>

                                        <div className="avatar">
                                            <img src={`${state.basePath}/team-space/avatar/3.png`} alt="" />
                                        </div>
                                    </div>
                                    <p>+4</p>
                                </div>
                            </div>

                            <div className="createPostCard">
                                <div className="createSec">
                                    <div className="profile">
                                        <img src={`${state.basePath}/dashboard/content.jpg`} alt="" />
                                    </div>
                                    <div className="textField">
                                        <input type="text" defaultValue={"Post a message to your department"} placeholder='Post a message to your department' />
                                    </div>
                                </div>
                                <div className="moreBtn welcomeCard-more">
                                    <div className="welcomeCard-moreBtn">
                                        <DotsVerticalIcon />
                                    </div>
                                </div>
                            </div>

                            <div className="card reminder-card team-space-sec">
                                <div className="topSec">
                                    <div className="userDetails">
                                        <div className="userProfile">
                                            <span>
                                                <img src={`${state.basePath}/dashboard/clockin-vatar.png`} alt="" />
                                            </span>
                                            <div className="online"></div>
                                        </div>
                                        <div className="userData">
                                            <h6>You have posted a message in <u>Website Design</u> project</h6>
                                            <p>Thursday 10:16am</p>
                                        </div>
                                    </div>

                                    <div className="welcomeCard-more">
                                        <div className="welcomeCard-moreBtn">
                                            <DotsVerticalIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className="bodySec">
                                    <p>Hey Olivia. We’re working on a dashboard prototype and love your work. Are you open to new projects?</p>
                                </div>
                                <div className="reactions">
                                    <div className="heart react">
                                        <img src={`${state.basePath}/team-space/reacts/heart.png`} alt="" />
                                    </div>

                                    <div className="nice react">
                                        <img src={`${state.basePath}/team-space/reacts/nice.png`} alt="" />
                                        <p className="number-of-react">
                                            2
                                        </p>
                                    </div>
                                </div>
                                <div className="commentSection">
                                    <div className="userProfile">
                                        <span>
                                            <img src={`${state.basePath}/dashboard/clockin-vatar.png`} alt="" />
                                        </span>
                                        <div className="online"></div>
                                    </div>
                                    <div className="textField">
                                        <input type="text" placeholder='Comment' />
                                    </div>
                                    <div className="send">
                                        <Send1 />
                                    </div>
                                </div>
                            </div>

                            <div className="card reminder-card team-space-sec">
                                <div className="topSec">
                                    <div className="userDetails">
                                        <div className="userProfile">
                                            <span>
                                                <img src={`${state.basePath}/dashboard/clockin-vatar.png`} alt="" />
                                            </span>
                                            <div className="online"></div>
                                        </div>
                                        <div className="userData">
                                            <h6>You have posted a message in <u>Website Design</u> project</h6>
                                            <p>Thursday 10:16am</p>
                                        </div>
                                    </div>

                                    <div className="welcomeCard-more">
                                        <div className="welcomeCard-moreBtn">
                                            <DotsVerticalIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className="bodySec">
                                    <p>Hey Olivia. We’re working on a dashboard prototype and love your work. Are you open to new projects?</p>
                                </div>
                                <div className="reactions">
                                    <div className="heart react">
                                        <img src={`${state.basePath}/team-space/reacts/heart.png`} alt="" />
                                    </div>

                                    <div className="nice react">
                                        <img src={`${state.basePath}/team-space/reacts/nice.png`} alt="" />
                                        <p className="number-of-react">
                                            2
                                        </p>
                                    </div>
                                </div>

                                <div className="card reminder-card team-space-sec replyPost">
                                    <div className="topSec">
                                        <div className="userDetails">
                                            <div className="userProfile">
                                                <span>
                                                    <img src={`${state.basePath}/dashboard/clockin-vatar.png`} alt="" />
                                                </span>
                                                <div className="online"></div>
                                            </div>
                                            <div className="userData">
                                                <h6>You have posted a message in <u>Website Design</u> project</h6>
                                                <p>Thursday 10:16am</p>
                                            </div>
                                        </div>

                                        <div className="welcomeCard-more">
                                            <div className="welcomeCard-moreBtn">
                                                <DotsVerticalIcon />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bodySec">
                                        <p>Hey Olivia. We’re working on a dashboard prototype and love your work. Are you open to new projects?</p>
                                    </div>
                                    <div className="reactions">
                                        <div className="heart react">
                                            <img src={`${state.basePath}/team-space/reacts/heart.png`} alt="" />
                                        </div>

                                        <div className="nice react">
                                            <img src={`${state.basePath}/team-space/reacts/nice.png`} alt="" />
                                            <p className="number-of-react">
                                                2
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="commentSection">
                                    <div className="userProfile">
                                        <span>
                                            <img src={`${state.basePath}/dashboard/clockin-vatar.png`} alt="" />
                                        </span>
                                        <div className="online"></div>
                                    </div>
                                    <div className="textField">
                                        <input type="text" placeholder='Comment' />
                                    </div>
                                    <div className="send">
                                        <Send1 />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="teamSpaceDashboard-rightAside">
                            <div className="card tsd-ra-anniversaryCard">
                                <div className="tsd-ra-anniversaryCard-head">
                                    <h6>Work Anniversary</h6>
                                </div>

                                <div className="tsd-ra-anniversaryCard-body">
                                    <p>No Work anniversary celebration today</p>
                                </div>
                            </div>

                            <div className="card tsd-ra-hiresCard">
                                <div className="tsd-ra-hiresCard-head">
                                    <h6>New Hires</h6>
                                </div>

                                <div className="tsd-ra-hiresCard-body">
                                    <div className="tagProfile">
                                        <span>OR</span>
                                    </div>

                                    <div className="userDetail">
                                        <p>S# Asad Khan</p>
                                        <span>Administration</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card tsd-ra-birthdayCard">
                                <div className="tsd-ra-birthdayCard-head">
                                    <h6>Birthday Buddy</h6>
                                </div>

                                <div className="tsd-ra-birthdayCard-body">
                                    <p>No Work Birthday celebration today</p>
                                </div>
                            </div>

                            <div className="card tsd-ra-courses-card">
                                <div className="tsd-ra-courses-card__header">Courses</div>

                                <div className="tsd-ra-courses-card__summary">
                                    <div>
                                        <div className="tsd-ra-courses-card__courses-count">12 courses</div>
                                        <div className="tsd-ra-courses-card__quarter">Completed in this quarter</div>
                                    </div>

                                    <div className="tsd-ra-courses-card__attended">
                                        <span>26 Attended</span>

                                        <Link to="" className="tsd-ra-courses-card__viewall">View All</Link>
                                    </div>
                                </div>

                                <div className="tsd-ra-courses-card__progress-row">
                                    <div className="tsd-ra-courses-card__progress">
                                        <svg width="80" height="80">
                                            <circle
                                                cx="40" cy="40" r="34"
                                                stroke="#E1E4EA"
                                                strokeWidth="6"
                                                fill="none"
                                            />
                                            <circle
                                                cx="40" cy="40" r="34"
                                                stroke="#335CFF"
                                                strokeWidth="6"
                                                fill="none"
                                                strokeDasharray={2 * Math.PI * 34}
                                                strokeDashoffset={2 * Math.PI * 34 * 0.75}
                                                strokeLinecap="round"
                                                transform="rotate(-90 40 40)"
                                            />
                                            <text
                                                x="42"
                                                y="40"
                                                textAnchor="middle"
                                                fontSize="16"
                                                fontWeight="600"
                                                fill="#202124"
                                                dominantBaseline="middle"
                                            >
                                                25%
                                            </text>
                                        </svg>
                                    </div>
                                    <div className="tsd-ra-courses-card__content">
                                        <div className="tsd-ra-courses-card__title">Team Diversity Training</div>
                                        <div className="tsd-ra-courses-card__desc">
                                            Designed to foster inclusivity and leverage diverse perspectives.
                                        </div>
                                        <Link to="#" className="tsd-ra-courses-card__resume">Resume Course</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamSpace
