import React, { useContext } from 'react'
import DotsVerticalIcon from '../../../component/icons/dots-vertical'
import AlaramClockCheckIcon from '../../../component/icons/alaram-clock-check'
import CalenderCheck2Icon from '../../../component/icons/calender-check-2'
import Umbrella3Icon from '../../../component/icons/umbrella3'
import ClockStopwatchIcon from '../../../component/icons/clock-stopwatch'
import { GlobalContext } from '../../../context/Context'

const Activities = () => {
    let { state } = useContext(GlobalContext);

    return (
        <>
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

            <div className="card offerLetterCard">
                <div className="offerLetterCard-left">
                    <div className="fileIcon">
                        <img src={`${state.basePath}/dashboard/pdf_icon.png`} alt="" />
                    </div>

                    <div className="fileDetail">
                        <h6 className="fileName">Offer Letter.pdf</h6>
                        <div className="fileSize">1.2 MB</div>
                    </div>
                </div>

                <div className="offerLetterCard-right">
                    <h6>Update On</h6>
                    <p>16 May 2025</p>
                </div>
            </div>

            <div className="card reminderCard">
                <div className="reminderCard-left">
                    <div className="icon">
                        <CalenderCheck2Icon />
                    </div>

                    <div className="detail">
                        <h6 className="title">Check-in Reminder</h6>
                        <div className="content">Your Shift has already Started</div>
                    </div>
                </div>

                <div className="reminderCard-right">
                    <h6>Full Day Shift</h6>
                    <p>9:00 AM 6:00 PM</p>
                </div>
            </div>


            <div className="card scheduleCard">
                <div className="scheduleCard-left">
                    <div className="top">
                        <div className="icon">
                            <ClockStopwatchIcon />
                        </div>

                        <div className="detail">
                            <h6 className="title">Work Schedule</h6>
                            <div className="content">19 May 2025  -  25 May 2025</div>
                        </div>
                    </div>                    

                    <div className="bottom">
                        <img src={`${state.basePath}/dashboard/frame1000003661.png`} alt="" />
                    </div>
                </div>
            </div>

            <div className="card reminderCard">
                <div className="reminderCard-left">
                    <div className="icon">
                        <AlaramClockCheckIcon />
                    </div>

                    <div className="detail">
                        <h6 className="title">You are yet to submit your time logs today!</h6>
                    </div>
                </div>
            </div>

            <div className="card reminderCard">
                <div className="reminderCard-left" style={{ alignItems: 'flex-start' }}>
                    <div className="icon" style={{ color: '#27A54C', backgroundColor: '#C2F5EE' }}>
                        <CalenderCheck2Icon />
                    </div>

                    <div className="detail" style={{ paddingTop: '16px' }}>
                        <h6 className="title" style={{ color: 'var(--primary-base, #335CFF)' }}>Team Availability</h6>
                        <div className="availabilityList">
                            <div className="availabilityListItem">
                                <p>Remote In</p>
                                <span>02 </span>
                            </div>

                            <div className="availabilityListItem" style={{ borderColor: 'var(--red-700, #D02533)' }}>
                                <p>Present (by Default)</p>
                                <span>02 </span>
                            </div>

                            <div className="availabilityListItem" style={{ borderColor: 'var(--red-700, #0B4627)' }}>
                                <p>Yet to Check-in</p>
                                <span>02 </span>
                            </div>

                            <div className="availabilityListItem" style={{ borderColor: 'var(--red-700, #FFECC0)' }}>
                                <p>On Duty</p>
                                <span>02 </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card reminderCard">
                <div className="reminderCard-left" style={{ alignItems: 'flex-start' }}>
                    <div className="icon" style={{ backgroundColor: 'var(--primary-alpha-10, rgba(71, 108, 255, 0.10))' }}>
                        <Umbrella3Icon />
                    </div>

                    <div className="detail" style={{ paddingTop: '16px' }}>
                        <h6 className="title">Upcoming Holidays</h6>

                        <div className="holidayList">
                            <div className="holidayListItem">
                                <h6>Eid Holidays</h6>
                                <p>From May 25 to May 27, 2025</p>
                            </div>

                            <div className="holidayListItem">
                                <h6>Native American Day</h6>
                                <p>eid ul fitr 2025</p>
                            </div>

                            <div className="holidayListItem">
                                <h6>US Independence Day</h6>
                                <p>eid ul fitr 2025</p>
                            </div>

                            <div className="holidayListAll">
                                <div className="holidayListAllBtn">View All</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Activities
