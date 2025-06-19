import React, { useContext } from "react";
import "../../styles/component/dashboard/PendingTaskStatus.css";
import DotsVerticalIcon from "../icons/dots-vertical";
import FlashLightFillIcon from "../icons/flashlight-fill";
import ChevronDownIcon from "../icons/chevron-down";
import { GlobalContext } from "../../context/Context";

const avatars = [
    { img: "dashboard/user1.png", alt: "Person 1" },
    { img: "dashboard/user2.png", alt: "Person 2" },
    { img: "dashboard/user3.png", alt: "Person 3" },
    { img: "dashboard/user4.png", alt: "Person 4" },
    { img: "dashboard/user5.png", alt: "Person 5" },
    { img: "dashboard/user1.png", alt: "Person 1" },
];

function TaskCard({ title }) {
    let { state } = useContext(GlobalContext);
    return (
        <div className="pending-task__taskcard">
            <div className="pending-task__taskcard-row">
                <div className="pending-task__taskcard-left">
                    <div className="pending-task__tasktitle">{title}</div>
                    <div className="pending-task__taskdesc">Deadline Missed</div>
                </div>

                <div className="pending-task__taskcard-right">
                    <div className="pending-task__downArrow">
                        <ChevronDownIcon />
                    </div>
                    <div className="pending-task__chip">
                        <span className="pending-task__chipicon">
                            <FlashLightFillIcon />
                        </span>
                        In Progress
                    </div>
                </div>
            </div>
            <div className="pending-task__avatars">
                {avatars.map((a, i) => (
                    (i < 5) ?
                        <img src={`${state.basePath}/${a.img}`} alt={a.alt} key={i} className="pending-task__avatar" />
                        :
                        (avatars.length === i + 1) ?
                            <span className="pending-task__avatar-more">+{i - 4}</span> : ''
                ))}
            </div>
        </div>
    );
}

export default function PendingTaskStatus() {
    return (
        <div className="card pending-taskcard">
            <div className="pending-task__header-row">
                <div>
                    <div className="pending-task__header">Pending Task Status</div>
                    <div className="pending-task__sub">
                        Task status: <span className="pending-task__sub--red">12 out of 75 tasks are incomplete.</span> Keep pushing forward!
                    </div>
                </div>
                <span className="pending-task__dots"><DotsVerticalIcon /></span>
            </div>

            <div className="pending-task__taskcards">
                <TaskCard title="Websitedezk Redesign" />
                <TaskCard title="Prowriting Hub Design" />
            </div>
            <div>
                <button className="pending-task__viewall">View All</button>
            </div>
        </div>
    );
}