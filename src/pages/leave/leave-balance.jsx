import React from 'react'
import SunSetting2Icon from '../../component/icons/sun-setting-2'
import Home1Icon from '../../component/icons/home1'
import FaceSadIcon from '../../component/icons/face-sad'
import { Helmet } from 'react-helmet'

const LeaveBalance = () => {
    return (
        <>
            <Helmet>
                <title>Leave | Balance</title>
            </Helmet>
            <div className="leaveMainPage">
                <div className="leaveBalanceCont">
                    <div className="leaveBalanceCard">
                        <div className="leftSec">
                            <div className="logo">
                                <SunSetting2Icon />
                            </div>
                            <h6>Annual Leaves</h6>
                        </div>
                        <div className="middleSec">
                            <div className="detailSec">
                                <p>Available</p>
                                <h6><span>12</span> days</h6>
                            </div>

                            <div className="detailSec">
                                <p>Booked</p>
                                <h6>1 days</h6>
                            </div>
                        </div>
                        <div className="rightSec">
                            <div className="applyCard">
                                Apply Leave
                            </div>
                        </div>
                    </div>

                    <div className="leaveBalanceCard">
                        <div className="leftSec">
                            <div className="logo blue">
                                <Home1Icon />
                            </div>
                            <h6>Casual Leave</h6>
                        </div>
                        <div className="middleSec">
                            <div className="detailSec">
                                <p>Available</p>
                                <h6><span>12</span> days</h6>
                            </div>

                            <div className="detailSec">
                                <p>Booked</p>
                                <h6>1 days</h6>
                            </div>
                        </div>
                        <div className="rightSec">
                            <div className="applyCard">
                                Apply Leave
                            </div>
                        </div>
                    </div>

                    <div className="leaveBalanceCard">
                        <div className="leftSec">
                            <div className="logo sky">
                                <FaceSadIcon />
                            </div>
                            <h6>Sick Leave</h6>
                        </div>
                        <div className="middleSec">
                            <div className="detailSec">
                                <p>Available</p>
                                <h6><span>12</span> days</h6>
                            </div>

                            <div className="detailSec">
                                <p>Booked</p>
                                <h6>1 days</h6>
                            </div>
                        </div>
                        <div className="rightSec">
                            <div className="applyCard">
                                Apply Leave
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeaveBalance
