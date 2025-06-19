import React from 'react'
import DotsVerticalIcon from '../../../component/icons/dots-vertical'
import User6Line from '../../../component/icons/user-6-line';

const Attendance = () => {

    const leaves = Array(7).fill({
        date: { day: 'Mon', date: '21' },
        details: { type: 'General', time: '9:00 AM - 6:00 PM' },
        status: 'Absent'
    });

  return (
    <div className='attendanceTabPage'>
        <div className="card myLeavesCard">
            <div className="headSec">
                <h3>My Leaves <span className='light'>(This Week)</span></h3>
                <div className="welcomeCard-more">
                    <div className="welcomeCard-moreBtn">
                        <DotsVerticalIcon />
                    </div>
                </div>
            </div>
            <div className="myleaves">
                <div className="myleaves__content">
                    {leaves.map((leave, i) => (
                        <div key={i} className={`myleaves__row${i % 2 === 0 ? ' myleaves__row--alt' : ''}`}>
                            <div className="myleaves__date">
                            <span className="myleaves__day">{leave.date.day}</span>
                            <span className="myleaves__num">{leave.date.date}</span>
                            </div>
                            <div className="myleaves__details">
                            <div className="myleaves__leave-type">{leave.details.type}</div>
                            <div className="myleaves__leave-time">{leave.details.time}</div>
                            </div>
                            <div className="myleaves__status">
                            <span>Absent</span>
                            </div>
                            <div className="myleaves__action">
                            {i === 0 && (
                                <button className="myleaves__btn">Change Shift</button>
                            )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="card teamLeaveCard">
            <div className="headSec">
                <h3>Team Leaves <span className='light'>(This Week)</span></h3>
                <div className="welcomeCard-more">
                    <div className="welcomeCard-moreBtn">
                        <DotsVerticalIcon />
                    </div>
                </div>
            </div>
            <div className="cardBodySec">
                {Array.from({length: 4}).map((_ , i) => (
                    <div key={i} className="teamCard">
                        <div className="cardLeft">
                            <div className="profile">
                                <User6Line />
                            </div>
                            <div className="data">
                                <h6>Taimoor Ansari</h6>
                                <p>UI/UX AI Designer</p>
                            </div>
                        </div>
                        <div className="cardRight">
                            <p>05 / <span>32</span></p>
                            <div className="opt">
                                <DotsVerticalIcon />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Attendance;