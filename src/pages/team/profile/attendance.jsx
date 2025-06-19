import React from 'react'
import Filter3FillIcon from '../../../component/icons/filter-3-fill'
import SortDescIcon from '../../../component/icons/sort-desc'
import ArrowDownsLineIcon from '../../../component/icons/arrow-downs-line'
import TimeLogCard from './layout/timeLogCard';

const logs = [
    {
        date: "Today",
        clockIn: "02:02:05",
        clockOut: "10:02:05",
        total: "10 hours 27 minutes in total ⏳",
        segments: [
            { label: "Breaks", width: "5%" },
            { label: "Active Time", width: "90%" },
            { label: "Extra Time", width: "10%" }
        ]
    },
    {
        date: "April 1, 2025 (Monday)",
        clockIn: "02:02:05",
        clockOut: "10:02:05",
        total: "10 hours 27 minutes in total ⏳",
        segments: [
            { color: "#F6B51E", label: "Breaks", width: "20%" },
            { color: "#47C2FF", label: "Active Time", width: "80%" },
            { color: "#7D52F4", label: "Extra Time", width: "3%" }
        ]
    },
    {
        date: "April 2, 2025 (Tuesday)",
        clockIn: "02:02:05",
        clockOut: "10:02:05",
        total: "10 hours 27 minutes in total ⏳",
        segments: [
            { color: "#F6B51E", label: "Breaks", width: "2%" },
            { color: "#47C2FF", label: "Active Time", width: "68%" },
            { color: "#7D52F4", label: "Extra Time", width: "30%" }
        ]
    },
    {
        date: "April 3, 2025 (Wednesday)",
        clockIn: "02:02:05",
        clockOut: "10:02:05",
        total: "10 hours 27 minutes in total ⏳",
        segments: [
            { color: "#F6B51E", label: "Breaks", width: "20%" },
            { color: "#47C2FF", label: "Active Time", width: "60%" },
            { color: "#7D52F4", label: "Extra Time", width: "20%" }
        ]
    },

    
    {
        date: "April 1, 2025 (Monday)",
        clockIn: "02:02:05",
        clockOut: "10:02:05",
        total: "10 hours 27 minutes in total ⏳",
        segments: [
            { color: "#F6B51E", label: "Breaks", width: "20%" },
            { color: "#47C2FF", label: "Active Time", width: "80%" },
            { color: "#7D52F4", label: "Extra Time", width: "3%" }
        ]
    },
    {
        date: "Today",
        clockIn: "02:02:05",
        clockOut: "10:02:05",
        total: "10 hours 27 minutes in total ⏳",
        segments: [
            { label: "Breaks", width: "5%" },
            { label: "Active Time", width: "90%" },
            { label: "Extra Time", width: "10%" }
        ]
    },
    {
        date: "April 3, 2025 (Wednesday)",
        clockIn: "02:02:05",
        clockOut: "10:02:05",
        total: "10 hours 27 minutes in total ⏳",
        segments: [
            { color: "#F6B51E", label: "Breaks", width: "20%" },
            { color: "#47C2FF", label: "Active Time", width: "60%" },
            { color: "#7D52F4", label: "Extra Time", width: "20%" }
        ]
    },
    {
        date: "April 2, 2025 (Tuesday)",
        clockIn: "02:02:05",
        clockOut: "10:02:05",
        total: "10 hours 27 minutes in total ⏳",
        segments: [
            { color: "#F6B51E", label: "Breaks", width: "2%" },
            { color: "#47C2FF", label: "Active Time", width: "68%" },
            { color: "#7D52F4", label: "Extra Time", width: "30%" }
        ]
    },
    

    {
        date: "Today",
        clockIn: "02:02:05",
        clockOut: "10:02:05",
        total: "10 hours 27 minutes in total ⏳",
        segments: [
            { label: "Breaks", width: "5%" },
            { label: "Active Time", width: "90%" },
            { label: "Extra Time", width: "10%" }
        ]
    },
    {
        date: "April 1, 2025 (Monday)",
        clockIn: "02:02:05",
        clockOut: "10:02:05",
        total: "10 hours 27 minutes in total ⏳",
        segments: [
            { color: "#F6B51E", label: "Breaks", width: "20%" },
            { color: "#47C2FF", label: "Active Time", width: "80%" },
            { color: "#7D52F4", label: "Extra Time", width: "3%" }
        ]
    },
    {
        date: "April 2, 2025 (Tuesday)",
        clockIn: "02:02:05",
        clockOut: "10:02:05",
        total: "10 hours 27 minutes in total ⏳",
        segments: [
            { color: "#F6B51E", label: "Breaks", width: "2%" },
            { color: "#47C2FF", label: "Active Time", width: "68%" },
            { color: "#7D52F4", label: "Extra Time", width: "30%" }
        ]
    },
    {
        date: "April 3, 2025 (Wednesday)",
        clockIn: "02:02:05",
        clockOut: "10:02:05",
        total: "10 hours 27 minutes in total ⏳",
        segments: [
            { color: "#F6B51E", label: "Breaks", width: "20%" },
            { color: "#47C2FF", label: "Active Time", width: "60%" },
            { color: "#7D52F4", label: "Extra Time", width: "20%" }
        ]
    },
];

const AttendanceTeam = () => {
    return (
        <div>
            <div className="card attendanceTeam_dashboard">
                <div className="attendanceTeam_dashboard-header">
                    <div className="attendanceTeam_dashboard-headerLeft">
                        <h6>Time Logs</h6>
                    </div>
                    <div className="attendanceTeam_dashboard-headerRight">
                        <div className="actionGrop">
                            <div className="actionItem">
                                <div className="actionItem_btn">
                                    <div className="icon">
                                        <Filter3FillIcon />
                                    </div>
                                    Filter
                                </div>
                            </div>

                            <div className="actionItem">
                                <div className="actionItem_btn">
                                    <div className="icon">
                                        <SortDescIcon />
                                    </div>

                                    Sort by

                                    <div className="actionItem_btn_dropIcon">
                                        <ArrowDownsLineIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="attendanceTeam_dashboard-body">
                    <div className="timelog-grid">
                        {logs.map((log, i) =>
                            <TimeLogCard
                                key={i}
                                clockIn={log.clockIn}
                                clockOut={log.clockOut}
                                total={log.total}
                                segments={log.segments}
                                date={log.date}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttendanceTeam
