import React from "react";

export default function DepartmentList({ departments, openIdx, onSelect }) {
  return (
    <div className="dept-list">
      {departments.map((dept, i) => (
        <button
          key={dept.code}
          className={`dept-btn ${openIdx === i ? "active" : ""}`}
          onClick={() => onSelect(openIdx === i ? null : i)}
        >
          <span className="dept-code">{dept.code}</span>
          <span className="dept-name">{dept.name}</span>
        </button>
      ))}
    </div>
  );
}