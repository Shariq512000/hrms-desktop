import React from "react";
import "../../styles/component/dashboard/EmployeeEngagements.css";
import DotsVerticalIcon from "../icons/dots-vertical";
import ChevronDownIcon from "../icons/chevron-down";

const engagements = [
  {
    title: "Team Meeting with James Brown",
    schedule: "SCHEDULE AT 8:00 - 8:45 AM (UTC)",
    venue: "2nd Floor",
    tag: "Marketing"
  },
  {
    title: "Team Meeting with James Brown",
    schedule: "SCHEDULE AT 8:00 - 8:45 AM (UTC)",
    venue: "2nd Floor",
    tag: "Marketing"
  }
];

export default function EmployeeEngagements() {
  return (
    <div className="card ee-card">
      <div className="ee-card__header-row">
        <span className="ee-card__title">Employee Engagments</span>
        <span className="ee-card__dots"><DotsVerticalIcon /></span>
      </div>
      <div className="ee-card__list">
        {engagements.map((eng, i) => (
          <div className="ee-card__item" key={i}>

            <div className="ee-card__item-row">
              <div>
                <div className="ee-card__item-title">{eng.title}</div>
                <div className="ee-card__item-schedule">{eng.schedule}</div>
                <div className="ee-card__item-venue">Venue&nbsp; {eng.venue}</div>
              </div>
              <div className="ee-card__tag">{eng.tag}</div>
            </div>

            <button className="ee-card__dropdown">
              <ChevronDownIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}