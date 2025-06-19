import React from 'react';
import ThemeDropdown from '../../component/ui/form/theme-dropdown';
import Rows3Icon from '../../component/icons/rows-3';
import DotsHorizontalIcon from '../../component/icons/dots-horizontal';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';

const LeaveShift = () => {
    const hours = [
        "12 AM", "01 AM", "02 AM", "03 AM", "04 AM", "05 AM",
        "06 AM", "07 AM", "08 AM", "09 AM", "10 AM", "11 AM",
        "12 PM", "01 PM", "02 PM", "03 PM", "04 PM", "05 PM",
        "06 PM", "07 PM", "08 PM", "09 PM", "10 PM", "11 PM"
    ];

    // Example data
    const days = [
        { day: "Mon", date: 11, event: { title: "Noon Flex", startHour: 9, endHour: 18, duration: "9:00 AM - 6:00 PM" } },
        { day: "Tue", date: 12, event: { title: "Noon Flex", startHour: 7, endHour: 16, duration: "7:00 AM - 4:00 PM" } },
        { day: "Wed", date: 13, event: { title: "Noon Flex", startHour: 10, endHour: 19, duration: "10:00 AM - 7:00 PM" } },
        { day: "Thu", date: 14, event: { title: "Noon Flex", startHour: 8, endHour: 17, duration: "8:00 AM - 5:00 PM" } },
        { day: "Fri", date: 15, event: { title: "Noon Flex", startHour: 6, endHour: 9, duration: "6:00 AM - 9:00 PM" } }
    ];

    return (
        <>
            <Helmet>
                <title>Leave | Shift</title>
            </Helmet>
            <div className="leaveMainPage">
                <div className='leaveTeamTabPage'>
                    <div className="upparSec">
                        <div className="leftSec">
                            <ThemeDropdown options={[{ value: "Leaves", name: "Leaves" }, { value: "Holidays", name: "Holidays" }]} />
                        </div>
                        <div className="rightSec">
                            <ThemeDropdown options={[{ value: "Annual Leaves", name: "Annual Leaves" }, { value: "Sick Leaves", name: "Sick Leaves" }]} />
                            <div className="memberBtn applyBtn">
                                <span>Apply Leaves</span>
                            </div>
                            <div className="iconBtn">
                                <Rows3Icon />
                            </div>
                            <div className="iconBtn">
                                <DotsHorizontalIcon />
                            </div>
                        </div>
                    </div>
                    <div className="timeline-card">
                        <table className="timelineTable">
                            <thead>
                                <tr>
                                    {hours?.map((eachHour, i) => (
                                        <th>{eachHour}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {days.map((eachDay, i) => {
                                    return (
                                        <tr className={i === 0 ? 'active' : ""} key={i}>
                                            {Array.from({ length: 24 }).map((_td, _index) => {
                                                if (_index > eachDay?.event?.startHour && _index < eachDay?.event?.endHour) {
                                                    return ('');
                                                }
                                                return (
                                                    <td key={_index} colSpan={(eachDay?.event?.startHour === _index) ? eachDay?.event?.endHour - eachDay?.event?.startHour : 1}>
                                                        {(_index === eachDay?.event?.startHour) ?
                                                            <Link to={"/leave/shift-calender"} className="calendarEventCard">
                                                                <h6>{eachDay?.event?.title}</h6>
                                                                <p>{eachDay?.event?.duration}</p>
                                                            </Link>
                                                            :
                                                            null
                                                        }
                                                    </td>
                                                )
                                            })}
                                            <div className="date-day">
                                                <h6>{eachDay?.day}</h6>
                                                <p>{eachDay?.date}</p>
                                            </div>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeaveShift
