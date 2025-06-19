import React, { useContext } from "react";
import "../../styles/component/dashboard/BirthdayCard.css";
import DotsVerticalIcon from "../icons/dots-vertical";
import { GlobalContext } from "../../context/Context";

const users = [
    { name: "Olivia Rhye", role: "Designer", img: "dashboard/olivia.png", online: true },
    { name: "Olivia Rhye", role: "Designer", img: "dashboard/olivia.png", online: true },
    { name: "Olivia Rhye", role: "Designer", img: "dashboard/olivia.png", online: true },
    { name: "Olivia Rhye", role: "Designer", img: "dashboard/olivia.png", online: true },
];

const others = [
    { img: "dashboard/olivia.png" },
    { img: "dashboard/olivia.png" }
];

const BirthdayCard = () => {
    let { state } = useContext(GlobalContext);
    return (
        <div className="card birthday-card">
            <div className="birthday-card__top">
                <div className="birthday-card__header">
                    <span className="birthday-card__title">Birthday</span>
                    <span className="birthday-card__dots"><DotsVerticalIcon /></span>
                </div>
                <p className="birthday-card__subtitle">
                    Today, we celebrate the birthdays of 5 amazing members of the Legendesk team!
                </p>
                <div className="birthday-card__grid">
                    {users.map((user, idx) => (
                        <div className="birthday-card__user" key={idx}>
                            <div className="birthday-card__avatar-wrapper">
                                <img src={`${state.basePath}/${user.img}`} alt={user.name} className="birthday-card__avatar" />
                                {user.online && <span className="birthday-card__status"></span>}
                            </div>
                            <div className="birthday-card__user-info">
                                <div className="birthday-card__user-name">{user.name}</div>
                                <div className="birthday-card__user-role">{user.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="birthday-card__footer">
                <div className="birthday-card__avatars">
                    {others.map((item, idx) => (
                        <img src={`${state.basePath}/${item.img}`} key={idx} alt="" className="birthday-card__footer-avatar" />
                    ))}
                    <span className="birthday-card__more">+1</span>
                </div>
                <a className="birthday-card__viewall" href="#view-all">View all</a>
            </div>
        </div>
    )
};

export default BirthdayCard;