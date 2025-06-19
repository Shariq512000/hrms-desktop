import React, { useContext } from 'react'
import EmployeeCard from '../../../component/team/employee-card'
import { GlobalContext } from '../../../context/Context';

const TeamDepartmentTab = () => {
    let { state } = useContext(GlobalContext);
    return (
        <div className='teamDepartTabPage'>
            <div className="card filterSec">
                <div className="leftSec">
                    <div className="dropDown">
                        <select>
                            <option value="">Creative & Pre-Production</option>
                        </select>
                    </div>
                    <div className="dropDown">
                        <select>
                            <option value="">Phase 8</option>
                        </select>
                    </div>
                </div>
                <div className="rightSec">
                    <h6>15</h6>
                    <p>Members</p>
                </div>
            </div>

            <div className="detailSec">
                <div className="managementCard">
                    <div className="headSec">
                        <h6>Managers</h6>
                        <div className="value">
                            <span>
                                15
                            </span>
                        </div>
                    </div>
                    <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                    <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                    <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                </div>

                <div className="managementCard">
                    <div className="headSec">
                        <h6>Team leaders</h6>
                        <div className="value">
                            <span>
                                15
                            </span>
                        </div>
                    </div>
                    <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                    <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                    <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                </div>

                <div className="managementCard">
                    <div className="headSec">
                        <h6>Team Members</h6>
                        <div className="value">
                            <span>
                                15
                            </span>
                        </div>
                    </div>
                    <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                    <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                    <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                </div>
            </div>
        </div>
    )
}

export default TeamDepartmentTab
