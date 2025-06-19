import React, { useContext, useState } from "react";
import { Link } from "react-router";
import DiscussLineIcon from "../../../component/icons/discuss-line";
import CalenderEventLineIcon from "../../../component/icons/calender-event-line";
import SpamLineIcon from "../../../component/icons/spam-line";
import CloseCircleLineIcon from "../../../component/icons/close-circle-line";
import TimeFillIcon from "../../../component/icons/time-fill";
import LayoutGridLineIcon from "../../../component/icons/layout-grid-line";
import ArrowLeftLineIcon from "../../../component/icons/arrow-left-line";
import ArrowRightLineIcon from "../../../component/icons/arrow-right-line";
import { GlobalContext } from "../../../context/Context";
import { Helmet } from "react-helmet";

// Demo Data
const filters = [
    { icon: <LayoutGridLineIcon />, label: "All Scheduled" },
    { icon: <DiscussLineIcon />, label: "Meetings (8)" },
    { icon: <CalenderEventLineIcon />, label: "Events (4)" },
    { icon: <SpamLineIcon />, label: "Conflicted (2)" },
    { icon: <CloseCircleLineIcon />, label: "Canceled (1)" },
];

const cards = [
    {
        title: "Weekly Team Meeting",
        time: "3:00 PM – 4:30 PM",
        status: { label: "Today", icon: <TimeFillIcon />, color: "#1FC16B", bg: "#E0FAEC" },
        action: "Join Meeting",
        href: './'
    },
    {
        title: "Product Launch Event",
        time: "3:00 PM – 4:30 PM",
        status: { label: "2 Conflicted", icon: <SpamLineIcon />, color: "#FF8447 ", bg: "#FFF1EB" },
        action: "See Conflict",
        href: './'
    },
    {
        title: "Team Building Workshop",
        time: "9:00 AM – 12:00 PM",
        status: { label: "Cancelled", icon: <TimeFillIcon />, color: "#FB3748", bg: "#FFEBEC" },
        action: "Jan 06, 2024",
        href: ''
    },
    {
        title: "Marketing Campaign Strategy",
        time: "2:30 PM – 4:00 PM",
        status: { label: "3 days later", icon: <TimeFillIcon />, color: "#525866", bg: "#F2F5F8" },
        action: "Feb 07, 2024",
        href: ''
    },
];

const weekDays = ["04 MON", "05 TUE", "06 WED", "07 THU", "08 FRI"];
const timeSlots = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM"];
const events = [
    // day: 0=mon, 1=tue, 2=wed, 3=thu, 4=fri
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



export default function Calendar() {
    const [selected, setSelected] = useState(0);
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
                <title>My Space | Calendar</title>
            </Helmet>
            <div className="mainBody">
                <div className="cal-main">
                    {/* Tabs/filter */}
                    <div className="cal-tabs">
                        {filters.map((f, i) => (
                            <div
                                className={`cal-tab${i === selected ? " cal-tab--active" : ""}`}
                                key={i}
                                onClick={() => setSelected(i)}
                            >
                                <span className="cal-tab-icon">{f.icon}</span> {f.label}
                            </div>
                        ))}
                    </div>

                    {/* Cards */}
                    <div className="cal-eventcards">
                        {cards.map((c, i) => (
                            <div className="cal-eventcard" key={i}>
                                <div className="cal-eventcardTop">
                                    <div className="ec-main">
                                        <div className="ec-title">{c.title}</div>
                                        <div className="ec-time">{c.time}</div>
                                    </div>

                                    <div className="ec-icon">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                <path d="M10.5001 10.879L14.2126 7.1665L15.2731 8.227L10.5001 13L5.72705 8.227L6.78755 7.1665L10.5001 10.879Z" fill="#525866" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div className="cal-eventcardBottom" style={{ background: c.status.bg }}>
                                    <div className="ec-status">
                                        <div className="icon" style={{ color: c.status.color }}>
                                            {c.status.icon}
                                        </div>
                                        <span>{c.status.label}</span>
                                    </div>
                                    <div className="ec-action">
                                        {
                                            (c.href) ? <Link href={c.href}>{c.action}</Link> : <span>{c.action}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

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
        </>
    );
}