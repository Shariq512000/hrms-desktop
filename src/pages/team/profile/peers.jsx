import React, { useContext } from 'react'
import EmployeeCard from '../../../component/team/employee-card'
import { GlobalContext } from '../../../context/Context';

const PeersTeam = () => {
    let { state } = useContext(GlobalContext);

    return (
        <div className='peersTabPage'>
            <div className="upparSec">
                <div className="leftSec">
                    <div className="userProfile">
                        <img src={`${state.basePath}/dashboard/clockin-vatar.png`} alt="" />
                    </div>
                    <p className="userName">1 - Schergeil Parvez</p>
                </div>
                <div className="rightSec">
                    <div className="memberBtn">
                        <span>Members 15</span>
                    </div>
                </div>
            </div>

            <div className="mainContent">
                <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
                <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} />
            </div>
        </div>
    )
}

export default PeersTeam
