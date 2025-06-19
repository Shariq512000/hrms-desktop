import React, { useContext } from 'react'
import Filter3FillIcon from '../../../component/icons/filter-3-fill';
import ArrowLeftLineIcon from "../../../component/icons/arrow-left-line";
import ArrowRightLineIcon from "../../../component/icons/arrow-right-line";
import { GlobalContext } from '../../../context/Context';
import { Helmet } from 'react-helmet';

const weekDays = ["04 MON", "05 TUE", "06 WED", "07 THU", "08 FRI"];

const timeSlots = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM"];

const events = [
    {
        day: 0, start: 0, duration: 0.5, title: "Insert your title right here", time: "3:00 - 4:30 PM", people: 0, platform: null
    },
    {
        day: 0, start: 0.5, duration: 0.5, title: "this is second", time: "3:00 - 4:30 PM", people: 0, platform: null
    },
    {
        day: 0, start: 3, duration: 1, title: "Insert your title right here", time: "3:00 - 4:30 PM", people: 7, platform: "Zoom"
    },
    {
        day: 1, start: 0, duration: 1, title: "Project Review Meeting", time: "9:00 - 9:30 AM", people: 2
    },
    {
        day: 1, start: 1, duration: 2, title: "Sales Team Training Session – Improving Sales Techniques", time: "10:00 - 11:30 AM", people: 7, platform: "Zoom"
    },
    {
        day: 1, start: 3.5, duration: 0.7, title: "Sales Performance Review", time: "12:30 PM - 1:00 PM", people: 4, platform: "Slack"
    },
    {
        day: 2, start: 0.5, duration: 1, title: "Marketing Strategy Discussion", time: "9:30 - 10:00 AM", people: 4
    },
    {
        day: 2, start: 2, duration: 0.7, title: "Strategy Planning for Company Expansion", time: "11:00 – 11:30 AM", people: 4
    },
    {
        day: 2, start: 2.7, duration: 1.3, title: "New Feature Implementation and Roadmap Discussion", time: "11:30 AM - 1:00 PM", people: 4, platform: "Zoom"
    },
    {
        day: 3, start: 0, duration: 1, title: "Customer Feedback Analysis", time: "9:00 - 10:00 AM", people: 4, platform: "Meet"
    },
    {
        day: 3, start: 3, duration: 1.5, title: "Insert your title right here", time: "3:00 - 4:30 PM", people: 4, platform: "Zoom"
    },
];

function getBlockStyle(start, duration, conditional) {
    return (
        {
            top: `${start * 120 + 6}px`,
            height: `${duration * 120 - 10}px`,
            justifyContent: `${conditional}`

        }
    );
}


const OrganizationCalender = () => {
    let { state } = useContext(GlobalContext);

    function peopleIcons(people) {
        if (people) {
            let arr = [];
            for (let i = 0; i < people; ++i) {
                if (i < 3) {
                    arr.push(<img src={`${state.basePath}/calander/avatar1-${i}.png`} alt="person" />);
                } else {
                }
            }
            if (people > 3) {
                arr.push(<span key="more">+{people - 3}</span>);
            }
            return arr;
        }
    }
    
    return (
        <>
            <Helmet>
                <title>Organization | Calendar</title>
            </Helmet>
            <div className="mainBody">
                <div className="orgCalender_dashboard">
                    <div className="birthday_page-filter">
                        <div className="birthday_page-filter-left">
                            <div className="bpfl-select">
                                <select>
                                    <option value="0">Current Month</option>
                                </select>
                                <span>Status</span>
                            </div>
                        </div>

                        <div className="birthday_page-filter-right">
                            <div className="bpfl-action">
                                <div className="bpfl-actionItems">
                                    <div className="bpfl-actionBtn">
                                        <div className="icon">
                                            <Filter3FillIcon />
                                        </div>

                                        Filter
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cal-main">
                        {/* Calendar part */}
                        <div className="cal-calendarsection">
                            {/* Arrow navigation */}
                            <div className="cal-row cal-calhead">
                                <div className="cal-cella cal-arrows">
                                    <button className="calarrow"><ArrowLeftLineIcon /></button>
                                    <button className="calarrow"><ArrowRightLineIcon /></button>
                                </div>
                                {weekDays.map((d, i) => (
                                    <div className="cal-cella cal-calday" key={i}>{d}</div>
                                ))}
                            </div>

                            {/* Main grid */}
                            <div className="cal-row">
                                {/* time sidebar */}
                                <div className="cal-timeside">
                                    {timeSlots.map(t => (
                                        <div className="cal-timeslot" key={t}>{t}</div>
                                    ))}
                                </div>
                                {/* calendar columns */}
                                <div className="cal-calendargrid">
                                    {weekDays.map((d, dayIdx) => (
                                        <div className="cal-daycol" key={dayIdx}>
                                            {/* event blocks */}
                                            {events.filter(e => e.day === dayIdx).map((ev, j) => (

                                                <div
                                                    className="cal-eventblock"
                                                    key={j}
                                                    style={getBlockStyle(ev.start, ev.duration, ((ev.people || ev.platform) ? "space-between" : 'center'))}
                                                >
                                                    <div className="cal-event-top">
                                                        <div className="cal-event-title">{ev.title}</div>
                                                        <div className="cal-event-time">{ev.time}</div>
                                                    </div>
                                                    {
                                                        (ev.people || ev.platform)
                                                            ?
                                                            <div className="cal-event-users">
                                                                <div className="cal-event-users-profile">
                                                                    {(ev.people) ? peopleIcons(ev.people) : ''}
                                                                </div>

                                                                {
                                                                    (ev.platform) ?
                                                                        ev.platform && (
                                                                            <span className="cal-event-platform">
                                                                                <span className="plftxt">on {ev.platform}</span>
                                                                            </span>
                                                                        )
                                                                        :
                                                                        ''
                                                                }
                                                            </div>
                                                            :
                                                            ''
                                                    }
                                                </div>
                                            ))}
                                            {/* transparent slots for borders */}
                                            {timeSlots.map((_, k) => <div className="cal-slot" key={k}></div>)}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrganizationCalender
