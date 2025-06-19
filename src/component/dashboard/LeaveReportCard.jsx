import React from "react";
import "../../styles/component/dashboard/LeaveReportCard.css";
import DotsVerticalIcon from "../icons/dots-vertical";

const leaves = [
    { type: "Annual Leave", value: 4, total: 9, color: "#fbc146" },
    { type: "Casual Leave", value: 8, total: 9, color: "#73c573" },
    { type: "Sick Leave", value: 2, total: 9, color: "#23b9ea" }
];

export default function LeaveReportCard() {
    const current = 10;
    const max = 100;

    return (
        <div className="card leave-card">
            <div className="leave-card__header">
                <span className="leave-card__title">Leave Report</span>
                <span className="leave-card__dots"><DotsVerticalIcon /></span>
            </div>

            <div className="leave-card__pie-wrap">
                <svg width="180" height="180" viewBox="0 0 180 180" style={{ display: "block" }}>
                    {/* Track */}
                    <circle
                        cx="90"
                        cy="90"
                        r="70"
                        fill="none"
                        stroke="#ededee"
                        strokeWidth="14"
                    />
                    {/* Progress Arc */}
                    <circle
                        cx="90"
                        cy="90"
                        r="70"
                        fill="none"
                        stroke="#335CFF"
                        strokeWidth="14"
                        strokeDasharray={2 * Math.PI * 70}
                        strokeDashoffset={2 * Math.PI * 70 * (1 - current / max)}
                        strokeLinecap="round"
                        transform="rotate(-90 90 90)"
                        style={{ transition: "stroke-dashoffset 1s" }}
                    />
                    {/* Centered Numbers */}
                    <text x="90" y="90" textAnchor="middle" dominantBaseline="middle" fontSize="20" fontWeight="700" fill="#000">
                        {current}
                        <tspan fontSize="20" fontWeight="500" fill="#000" dx="5">/</tspan>
                        <tspan fontSize="20" fontWeight="500" fill="#000">{max}</tspan>
                    </text>
                </svg>
                <div className="leave-card__pie-label">Total Leaves</div>
            </div>

            <div className="leave-card__dist-label">Leaves Distribution</div>

            <div className="leave-card__dist">
                {leaves.map((l, i) => (
                    <div className="leave-card__dist-row" key={l.type}>
                        <div className="leave-card__dist-header">
                            <span className="leave-card__dist-type">{l.type}</span>
                            <span className="leave-card__dist-amount">{("0" + l.value).slice(-2)}/{"0" + l.total}</span>
                        </div>
                        <div className="leave-card__bar-track">
                            <div
                                className="leave-card__bar-fill"
                                style={{
                                    background: l.color,
                                    width: `${(l.value / l.total) * 100}%`
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}