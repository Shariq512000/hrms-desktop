import React, { useContext } from "react";
import "../../styles/component/dashboard/AnnouncementsCard.css";
import DotsVerticalIcon from "../icons/dots-vertical";
import CheckCircleIcon from "../icons/check-circle";
import XCloseIcon from "../icons/x-close";
import { GlobalContext } from "../../context/Context";

const peopleAvatars = [
    { img: "dashboard/user1.png", alt: "Person 1" },
    { img: "dashboard/user2.png", alt: "Person 2" },
    { img: "dashboard/user3.png", alt: "Person 3" },
    { img: "dashboard/user4.png", alt: "Person 4" },
    { img: "dashboard/user5.png", alt: "Person 5" },
    { img: "dashboard/user1.png", alt: "Person 1" },
];

export default function AnnouncementsCard() {

    let { state } = useContext(GlobalContext);

    return (
        <div className="card ann-card">
            <div className="ann-card__top">
                <div className="ann-card__header">
                    <span className="ann-card__title">Announcements</span>
                    <span className="ann-card__dots"><DotsVerticalIcon /></span>
                </div>

                <div className="ann-card__messages">
                    {/* 1st entry */}
                    <div className="ann-card__msg">
                        <div className="ann-card__msg-row">
                            <div className="ann-card__msg-icon success">
                                <CheckCircleIcon />
                            </div>

                            <div>
                                <div className="ann-card__msg-title">Successfully updated profile</div>
                                <div className="ann-card__msg-desc">
                                    Your changes have been saved and your profile is live. Your team can make edits.
                                </div>

                                <div className="ann-card__msg-actions">
                                    <a href="#dismiss" className="ann-card__action dismiss">Dismiss</a>
                                    <a href="#view" className="ann-card__action">View changes</a>
                                </div>
                            </div>

                            <span className="ann-card__msg-close"><XCloseIcon /></span>
                        </div>
                    </div>

                    {/* 2nd entry */}
                    <div className="ann-card__msg">
                        <div className="ann-card__msg-row">
                            <div className="ann-card__msg-icon">
                                <img
                                    src={`${state.basePath}/dashboard/avatar_phoenix_baker.png`}
                                    alt="Katherine Moss"
                                    className="ann-card__msg-avatar"
                                />
                            </div>
                            <div>
                                <div className="ann-card__msg-title">Katherine Moss <span className="ann-card__msg-time">2 mins ago</span></div>
                                <div className="ann-card__msg-desc">
                                    I’ve finished adding my notes. Happy for us to review whenever you’re ready!
                                </div>

                                <div className="ann-card__msg-actions">
                                    <a href="#dismiss" className="ann-card__action dismiss">Dismiss</a>
                                    <a href="#reply" className="ann-card__action">Reply</a>
                                </div>
                            </div>
                            <span className="ann-card__msg-close"><XCloseIcon /></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ann-card__footer">
                <div className="ann-card__avatars">
                    {peopleAvatars.map((a, i) => (
                        (i < 5) ?
                            <img src={`${state.basePath}/${a.img}`} alt={a.alt} key={i} className="ann-card__footer-avatar" />
                            :
                            (peopleAvatars.length === i + 1) ?
                                <span className="ann-card__footer-more">+{i - 4}</span> : ''
                    ))}

                </div>
                <a href="#viewers" className="ann-card__viewers-link">Viewers</a>
            </div>
        </div>
    );
}