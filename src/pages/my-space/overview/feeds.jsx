import React, { useContext } from 'react'
import DotsVerticalIcon from '../../../component/icons/dots-vertical'
import CalendarLineIcon from '../../../component/icons/calendar-line';
import RatingIcon from '../../../component/icons/rating';
import { GlobalContext } from '../../../context/Context';

const Feeds = () => {
    let { state } = useContext(GlobalContext);
    return (
        <div className='overview-feed'>
            <div className="card welcomeCard">
                <div className="welcomeCard-user">
                    <div className="profileImage">
                        <span>
                            <img src={`${state.basePath}/dashboard/content.jpg`} alt="" />
                        </span>
                    </div>

                    <div className="detail">
                        <h6>Good Morning Schergeil.Parvez</h6>
                        <p>Have a productive day! </p>
                    </div>
                </div>

                <div className="welcomeCard-more">
                    <div className="welcomeCard-moreBtn">
                        <DotsVerticalIcon />
                    </div>
                </div>
            </div>

            <div className="innerTab-card">
                <div className="innerTabs">
                    <div className="innerTab active">All</div>
                    <div className="innerTab">Status</div>
                    <div className="innerTab">Announcement</div>
                    <div className="innerTab">Approvals</div>
                    <div className="innerTab">Mail Alerts</div>
                    <div className="innerTab">Holidays</div>
                    <div className="innerTab">Leave</div>
                    <div className="innerTab">Shifts</div>
                </div>

                <div className="welcomeCard-more">
                    <div className="welcomeCard-moreBtn">
                        <DotsVerticalIcon />
                    </div>
                </div>
            </div>

            <div className="card reminder-card">
                <div className="topSec">
                    <div className="userDetails">
                        <div className="userProfile">
                            <span>
                                <img src={`${state.basePath}/dashboard/clockin-vatar.png`} alt="" />
                            </span>
                            <div className="online"></div>
                        </div>
                        <div className="userData">
                            <h6>Reminder for check-in</h6>
                            <p>Yesterday 9:30 AM</p>
                        </div>
                    </div>

                    <div className="welcomeCard-more">
                        <div className="welcomeCard-moreBtn">
                            <DotsVerticalIcon />
                        </div>
                    </div>
                </div>

                <div className="bodySec">
                    <p>Your shift has already begun. Ensure you have marked your attendance.</p>
                </div>

                <div className="bottomSec">
                    <div className="btnGroup">
                        <div className="redBtn">
                            Yesterday
                        </div>
                        <div className="orangeBtn">
                            Important
                        </div>
                    </div>

                    <div className="dateGroup">
                        <span>
                            <CalendarLineIcon />
                        </span>
                        <p>Aug 01</p>
                    </div>
                </div>
            </div>

            <div className="card reminder-card">
                <div className="topSec">
                    <div className="userDetails">
                        <div className="userProfile">
                            <span>
                                <img src={`${state.basePath}/dashboard/content.jpg`} alt="" />
                            </span>
                            <div className="online"></div>
                        </div>
                        <div className="userData">
                            <h6><span className='name'>Schergeil Parvez</span> has sent you a message.</h6>
                            <p>21 April 9:52 PM</p>
                        </div>
                    </div>

                    <div className="welcomeCard-more">
                        <div className="welcomeCard-moreBtn">
                            <DotsVerticalIcon />
                        </div>
                    </div>
                </div>

                <div className="bodySec">
                    <p>Hello everyone, let's welcome @<span className='mention'>Kashif Faizal</span> to our team.</p>
                </div>

                <div className="bottomSec">
                    <div className="btnGroup">
                        <div className="redBtn">
                            Yesterday
                        </div>
                        <div className="orangeBtn">
                            Important
                        </div>
                    </div>

                    <div className="dateGroup">
                        <span>
                            <CalendarLineIcon />
                        </span>
                        <p>Aug 01</p>
                    </div>
                </div>
            </div>

            <div className="card reminder-card">
                <div className="topSec">
                    <div className="userDetails">
                        <div className="userProfile">
                            <span>
                                <img src={`${state.basePath}/dashboard/clockin-vatar.png`} alt="" />
                            </span>
                            <div className="online"></div>
                        </div>
                        <div className="userData">
                            <h6>Reminder for check-in</h6>
                            <p>21 April 9:52 PM</p>
                        </div>
                    </div>

                    <div className="welcomeCard-more">
                        <div className="welcomeCard-moreBtn">
                            <DotsVerticalIcon />
                        </div>
                    </div>
                </div>

                <div className="bodySec">
                    <p>Your shift has already begun. Ensure you have marked your attendance. <br /> <br /> Click for Comment </p>
                    <textarea defaultValue={"I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."}></textarea>
                    <p>964 characters left</p>
                </div>

                <div className="bottomSec">
                    <div className="btnGroup">
                        <div className="redBtn">
                            Yesterday
                        </div>
                        <div className="orangeBtn">
                            Important
                        </div>
                    </div>

                    <div className="dateGroup">
                        <span>
                            <CalendarLineIcon />
                        </span>
                        <p>Aug 01</p>
                    </div>
                </div>
            </div>

            <div className="card reminder-card">
                <div className="topSec">
                    <div className="userDetails">
                        <div className="userProfile">
                            <span>
                                <img src={`${state.basePath}/dashboard/clockin-vatar.png`} alt="" />
                            </span>
                            <div className="online"></div>
                        </div>
                        <div className="userData">
                            <h6>Reminder for check-in</h6>
                            <p>21 April 9:52 PM</p>
                        </div>
                    </div>

                    <div className="welcomeCard-more">
                        <div className="welcomeCard-moreBtn">
                            <DotsVerticalIcon />
                        </div>
                    </div>
                </div>

                <div className="bodySec">
                    <p>Your shift has already begun. Ensure you have marked your attendance.</p>
                    <div className="replySec">
                        <div className="topSec">
                            <div className="userDetails">
                                <div className="userProfile">
                                    <span>
                                        <img src={`${state.basePath}/dashboard/clockin-vatar.png`} alt="" />
                                    </span>
                                </div>
                                <div className="userData">
                                    <p>James Brown</p>
                                    <h6>Congrats, Matthew! 🔥</h6>
                                </div>
                            </div>

                            <div className="welcomeCard-more">
                                <div className="welcomeCard-moreBtn">
                                    <RatingIcon />
                                </div>
                            </div>
                        </div>

                        <div className="bottomSec">
                            <p className='date'>Today 4:49 AM </p>
                            <div className="reply">
                                Reply
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottomSec">
                    <div className="btnGroup">
                        <div className="redBtn">
                            Yesterday
                        </div>
                        <div className="orangeBtn">
                            Important
                        </div>
                    </div>

                    <div className="dateGroup">
                        <span>
                            <CalendarLineIcon />
                        </span>
                        <p>Aug 01</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feeds;