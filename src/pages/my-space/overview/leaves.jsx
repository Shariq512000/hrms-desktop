import React, { useContext } from 'react'
import DotsVerticalIcon from '../../../component/icons/dots-vertical'
import HomeIcon from '../../../component/icons/home';
import SunSetting3Icon from '../../../component/icons/sun-setting-3';
import Umbrella3Icon from '../../../component/icons/umbrella-3';
import Home4Icon from '../../../component/icons/home-4';
import FaceSadIcon from '../../../component/icons/face-sad';
import { GlobalContext } from '../../../context/Context';

const Leaves = () => {
    let { state } = useContext(GlobalContext);

    return (
        <div className='leaveTabPage'>
            <div className="headTab">
                <div className="leaveTabs">
                    <div className="leaveTab">
                        My Leaves
                    </div>
                    <div className="leaveTab active">
                        Leaves
                    </div>
                </div>
            </div>
            <div className="leaveTabBody">
                <div className="topSec">
                    <h3 className="heading">My Leaves</h3>
                    <div className="topSec-cardContainer">
                        <div className="topSec-card">
                            <div className="cardLeftSec">
                                <div className="logoSec red">
                                    <HomeIcon />
                                </div>
                                <div className="content">
                                    Family and Medical Leave (FMLA)
                                </div>
                            </div>

                            <div className="cardRightSec">
                                <div className="detailSec">
                                    <div className="detail">
                                        <h6>Available</h6>
                                        <p><span>28</span> Days</p>
                                    </div>

                                    <div className="detail">
                                        <h6>Booked</h6>
                                        <p>0 Days</p>
                                    </div>
                                </div>

                                <div className="buttonSec">
                                    <div className="applyBtn">
                                        Apply Leave
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="topSec-card">
                            <div className="cardLeftSec">
                                <div className="logoSec green">
                                    <SunSetting3Icon />
                                </div>
                                <div className="content">
                                    Funeral Leaves
                                </div>
                            </div>

                            <div className="cardRightSec">
                                <div className="detailSec">
                                    <div className="detail">
                                        <h6>Available</h6>
                                        <p><span>0</span> Days</p>
                                    </div>

                                    <div className="detail">
                                        <h6>Booked</h6>
                                        <p>0 Days</p>
                                    </div>
                                </div>

                                <div className="buttonSec">
                                    <div className="applyBtn">
                                        Apply Leave
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="topSec-card">
                            <div className="cardLeftSec">
                                <div className="logoSec blue">
                                    <Umbrella3Icon />
                                </div>
                                <div className="content">
                                    Paid Time Off
                                </div>
                            </div>

                            <div className="cardRightSec">
                                <div className="detailSec">
                                    <div className="detail">
                                        <h6>Available</h6>
                                        <p><span>0</span> Days</p>
                                    </div>

                                    <div className="detail">
                                        <h6>Booked</h6>
                                        <p>0 Days</p>
                                    </div>
                                </div>

                                <div className="buttonSec">
                                    <div className="applyBtn">
                                        Apply Leave
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="topSec-card">
                            <div className="cardLeftSec">
                                <div className="logoSec sky">
                                    <Home4Icon />
                                </div>
                                <div className="content">
                                    Casual Leave
                                </div>
                            </div>

                            <div className="cardRightSec">
                                <div className="detailSec">
                                    <div className="detail">
                                        <h6>Available</h6>
                                        <p><span>0</span> Days</p>
                                    </div>

                                    <div className="detail">
                                        <h6>Booked</h6>
                                        <p>0 Days</p>
                                    </div>
                                </div>

                                <div className="buttonSec">
                                    <div className="applyBtn">
                                        Apply Leave
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="topSec-card">
                            <div className="cardLeftSec">
                                <div className="logoSec pink">
                                    <FaceSadIcon />
                                </div>
                                <div className="content">
                                    Sick Leave
                                </div>
                            </div>

                            <div className="cardRightSec">
                                <div className="detailSec">
                                    <div className="detail">
                                        <h6>Available</h6>
                                        <p><span>0</span> Days</p>
                                    </div>

                                    <div className="detail">
                                        <h6>Booked</h6>
                                        <p>0 Days</p>
                                    </div>
                                </div>

                                <div className="buttonSec">
                                    <div className="applyBtn">
                                        Apply Leave
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomSec">
                    <h3 className="heading">Team Leaves Approvel</h3>
                    <div className="bottomSec-cardContainer">
                        <div className="bottomSec-card">
                            <h4 className="cardHeading">Sick Leaves</h4>
                            <div className="innerCard-container">
                                {Array.from({ length: 5 })?.map((_, i) => (
                                    <div key={i} className="innerCard">
                                        <div className="leftSec">
                                            <div className="userDetail">
                                                <div className="profile">
                                                    <img src={`${state.basePath}/dashboard/header_avatar.png`} alt="" />
                                                    <div className="active"></div>
                                                </div>
                                                <div className="data">
                                                    <h6>Olivia Rhye</h6>
                                                    <p>olivia@untitledui.com</p>
                                                </div>
                                            </div>
                                            <div className="settings">
                                                <DotsVerticalIcon />
                                            </div>
                                        </div>
                                        <div className="rightSec">
                                            <div className="btnGroup">
                                                <div className="disAppBtn innerCardBtn">
                                                    Disapprove
                                                </div>
                                                <div className="applyBtn innerCardBtn">
                                                    Apply Leave
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bottomSec-card">
                            <h4 className="cardHeading">Casual Leave</h4>
                            <div className="innerCard-container">
                                {Array.from({ length: 5 })?.map((_, i) => (
                                    <div key={i} className="innerCard">
                                        <div className="leftSec">
                                            <div className="userDetail">
                                                <div className="profile">
                                                    <img src={`${state.basePath}/dashboard/header_avatar.png`} alt="" />
                                                    <div className="active"></div>
                                                </div>
                                                <div className="data">
                                                    <h6>Olivia Rhye</h6>
                                                    <p>olivia@untitledui.com</p>
                                                </div>
                                            </div>
                                            <div className="settings">
                                                <DotsVerticalIcon />
                                            </div>
                                        </div>
                                        <div className="rightSec">
                                            <div className="btnGroup">
                                                <div className="disAppBtn innerCardBtn">
                                                    Disapprove
                                                </div>
                                                <div className="applyBtn innerCardBtn">
                                                    Apply Leave
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bottomSec-card">
                            <h4 className="cardHeading">Sick Leaves</h4>
                            <div className="innerCard-container">
                                {Array.from({ length: 5 })?.map((_, i) => (
                                    <div key={i} className="innerCard">
                                        <div className="leftSec">
                                            <div className="userDetail">
                                                <div className="profile">
                                                    <img src={`${state.basePath}/dashboard/header_avatar.png`} alt="" />
                                                    <div className="active"></div>
                                                </div>
                                                <div className="data">
                                                    <h6>Olivia Rhye</h6>
                                                    <p>olivia@untitledui.com</p>
                                                </div>
                                            </div>
                                            <div className="settings">
                                                <DotsVerticalIcon />
                                            </div>
                                        </div>
                                        <div className="rightSec">
                                            <div className="btnGroup">
                                                <div className="disAppBtn innerCardBtn">
                                                    Disapprove
                                                </div>
                                                <div className="applyBtn innerCardBtn">
                                                    Apply Leave
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leaves;