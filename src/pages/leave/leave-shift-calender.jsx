import React from 'react';
import ThemeDropdown from '../../component/ui/form/theme-dropdown';
import Rows3Icon from '../../component/icons/rows-3';
import DotsHorizontalIcon from '../../component/icons/dots-horizontal';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';

const LeaveShiftCalender = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const startDayIndex = 4; // Thu
    const monthDays = 31;

    const eventsArray = Array.from({ length: monthDays }, (_, i) => {
        const date = String(i + 1).padStart(2, "0");
        const day = daysOfWeek[(startDayIndex + i) % 7];
        return {
            date,
            day,
            event: {
                title: "Noon Flex",
                time: "9:00 AM - 6:00 PM"
            }
        };
    });

    // Step 2: Make the matrix for the calendar
    function getCalendarMatrix(eventsArray, startDayIndex) {
        const weeks = [];
        let week = [];
        
        // Add empty cells for days before the 1st
        for(let i=0; i<startDayIndex; i++) {
            week.push({day: daysOfWeek[i]});
        }

        // Fill in the days
        eventsArray.forEach((event, idx) => {
            week.push(event);
            if (week.length === 7) {
                weeks.push(week);
                week = [];
            }
        });

        // Fill the last week with empty cells if needed
        if (week.length > 0) {
            while(week.length < 7) week.push(null);
            weeks.push(week);
        }
        return weeks;
    }

    const weeks = getCalendarMatrix(eventsArray, startDayIndex);

  return (
    <>
        <Helmet>
            <title>Leave | Calendar</title>
        </Helmet>
        <div className="leaveMainPage">
        <div className='leaveTeamTabPage'>
            <div className="upparSec">
                <div className="leftSec">
                    <ThemeDropdown options={[{value: "Leaves", name: "Leaves"},{value: "Holidays", name: "Holidays"}]} />
                </div>
                <div className="rightSec">
                    <ThemeDropdown options={[{value: "Annual Leaves", name: "Annual Leaves"},{value: "Sick Leaves", name: "Sick Leaves"}]} />
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

            <div className="mainCalenderSec">
                <table className="leaveCalenderTable">
                    <thead>
                        <tr>
                            {daysOfWeek?.map((eachDay , i) => (
                                <th>{eachDay}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {weeks.map((week, i) => (
                            <tr key={i}>
                                {week.map((cell, j) => {
                                    return(
                                        <td
                                            key={j}
                                            className={cell?.day === "Sun" ? "holiday" : ""}
                                        >
                                            {cell?.event && (
                                                <div className='cellMainCont'>
                                                    <div className='date'>{cell.date}</div>
                                                    <Link to={"/leave/shift-detail"} className="cellCard">
                                                        <h6>{cell.event.title}</h6>
                                                        <p>{cell.event.time}</p>
                                                    </Link>
                                                </div>
                                            )}
                                        </td>
                                    )
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    </>
  )
}

export default LeaveShiftCalender