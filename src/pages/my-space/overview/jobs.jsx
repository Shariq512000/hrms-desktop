import React from 'react'
import DotsVerticalIcon from '../../../component/icons/dots-vertical'
import CheckCircleIcon from '../../../component/icons/check-circle';

const Jobs = () => {
  return (
    <div className='jobTabPage'>
        <div className="card" style={{background: "transparent"}}>
            <div className="headSec">
                <h3 className='main'>Active Jobs&nbsp;&nbsp;&nbsp;<span className='light'>-&nbsp;&nbsp;&nbsp;This Week</span></h3>
                <div className="welcomeCard-more">
                    <div className="welcomeCard-moreBtn">
                        <DotsVerticalIcon />
                    </div>
                </div>
            </div>
        </div>

        <div className="jobCardContainer">
            {Array.from({length: 3}).map((_ , i) => (
                <div key={i} className="jobCard">
                    <div className="cardLeft">
                        <h6>Brand Design</h6>
                        <p>10 Feb 2025 - 30 May 2025</p>
                    </div>
                    <div className="cardRight">
                        <div className="detailSec">
                            <div className="detail">
                                <p>Estimated Hours</p>
                                <h6>40 Hrs, 0 Mins</h6>
                            </div>

                            <div className="detail">
                                <p>Logged Hours</p>
                                <h6>0 Hrs, 0 Mins</h6>
                            </div>
                        </div>

                        <div className="statusSec">
                            <div className="statusBtn">
                                <span>
                                    <CheckCircleIcon />
                                </span>
                                <p>
                                    In-Progress
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Jobs;