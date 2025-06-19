import React from 'react'
import SunSetting2Icon from '../../../component/icons/sun-setting-2'
import DotsVerticalIcon from '../../../component/icons/dots-vertical'
import Home1Icon from '../../../component/icons/home1'
import FaceSadIcon from '../../../component/icons/face-sad'
import LeaveTable from '../../../component/ui/table/leave-table'
import LeaveCard from '../../../component/ui/card/leave-card'

const LeaveTeam = () => {
    const leaves = [
        {
            date: "17 Jan 2025 Mon",
            title: "Independence Day",
            subtitle: "Campaign Strategy Brainstorming",
            desc:"Schergiel Parvez is a Pakistani entrepreneur and creative professional, best known as the Founder and CEO of Legendesk (Pvt.) Ltd.",
        },
        {
            date: "17 Jan 2025 Mon",
            title: "Independence Day",
            subtitle: "Campaign Strategy Brainstorming",
            desc:"Schergiel Parvez is a Pakistani entrepreneur and creative professional, best known as the Founder and CEO of Legendesk (Pvt.) Ltd.",
        },
        {
            date: "17 Jan 2025 Mon",
            title: "Independence Day",
            subtitle: "Campaign Strategy Brainstorming",
            desc:"Schergiel Parvez is a Pakistani entrepreneur and creative professional, best known as the Founder and CEO of Legendesk (Pvt.) Ltd.",
        },
        {
            date: "17 Jan 2025 Mon",
            title: "Independence Day",
            subtitle: "Campaign Strategy Brainstorming",
            desc:"Schergiel Parvez is a Pakistani entrepreneur and creative professional, best known as the Founder and CEO of Legendesk (Pvt.) Ltd.",
        },
        {
            date: "17 Jan 2025 Mon",
            title: "Independence Day",
            subtitle: "Campaign Strategy Brainstorming",
            desc:"Schergiel Parvez is a Pakistani entrepreneur and creative professional, best known as the Founder and CEO of Legendesk (Pvt.) Ltd.",
        },
    ];
  return (
    <div className='leaveTeamTabPage'>
        <div className="upparSec">
            <div className="leftSec">
                <p className="userName">Leave booked this year : 0</p>
                <p className="userName">Absent : 0</p>
            </div>
            <div className="rightSec">
                <div className="memberBtn">
                    <span>Total Leaves: 32</span>
                </div>
            </div>
        </div>

        <div className="leaveCountSec">
            <LeaveCard cardHeading={"Annual Leaves"} cardLogo={<SunSetting2Icon />} available={0} book={0} />
            <LeaveCard cardHeading={"Casual Leaves"} cardLogo={<Home1Icon />} available={0} book={0} />
            <LeaveCard cardHeading={"Sick Leaves"} cardLogo={<FaceSadIcon />} available={0} book={0} />
        </div>

        <div className="leaveTable">
            <div className="card tableCard">
                <div className="headSec">
                    <h3>Upcoming Leaves & Holidays</h3>
                    <div className="welcomeCard-more">
                        <div className="welcomeCard-moreBtn">
                            <DotsVerticalIcon />
                        </div>
                    </div>
                </div>
                <div className="bodySec">
                    <LeaveTable leaves={leaves}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeaveTeam
