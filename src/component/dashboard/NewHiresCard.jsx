import React, { useContext } from "react";
import "../../styles/component/dashboard/NewHiresCard.css";
import DotsVerticalIcon from "../icons/dots-vertical";
import { GlobalContext } from "../../context/Context";

// Example avatar URLs (replace as needed)
const AVATAR = "dashboard/avatar_phoenix_baker.png";

const newHires = [
    [
        { name: "Phoenix Baker", role: "UI/Ux Designer", dept: "Brand Team" },
        { name: "Phoenix Baker", role: "Guard", dept: "Admintration Dept." },
    ],
    [
        { name: "Phoenix Baker", role: "UI/Ux Designer", dept: "Brand Team" },
        { name: "Phoenix Baker", role: "Guard", dept: "Admintration Dept." },
    ],
    [
        { name: "Phoenix Baker", role: "UI/Ux Designer", dept: "Brand Team" },
        { name: "Phoenix Baker", role: "Guard", dept: "Admintration Dept." },
    ],
];

const footerAvatars = [
    { img: "dashboard/user1.png" },
    { img: "dashboard/user2.png" },
    { img: "dashboard/user3.png" },
    { img: "dashboard/user4.png" },
    { img: "dashboard/user5.png" },
    { img: "dashboard/user4.png" },
];

const NewHiresCard = () => {
    let { state } = useContext(GlobalContext);

    return (
        <div className="card nh-card">
            <div className="nh-card__top">
                <div className="nh-card__header">
                    <span className="nh-card__title">New Hires</span>
                    <span className="nh-card__dots"><DotsVerticalIcon /></span>
                </div>
                <div className="nh-card__grid">
                    {/* Left column */}
                    <div>
                        {newHires.map((hire, idx) => (
                            <div className="nh-card__personCard">
                                <div className="nh-card__person" key={idx}>
                                    <img src={`${state.basePath}/${AVATAR}`} alt="" className="nh-card__avatar" />
                                    <div>
                                        <div className="nh-card__name">{hire[0].name}</div>
                                        <div className="nh-card__role">{hire[0].role}</div>
                                    </div>
                                </div>

                                <span className="nh-card__dept">{hire[0].dept}</span>
                            </div>
                        ))}
                    </div>
                    {/* Right column */}
                    <div>
                        {newHires.map((hire, idx) => (
                            <div className="nh-card__personCard">
                                <div className="nh-card__person" key={idx}>
                                    <img src={`${state.basePath}/${AVATAR}`} alt="" className="nh-card__avatar" />
                                    <div>
                                        <div className="nh-card__name">{hire[1].name}</div>
                                        <div className="nh-card__role">{hire[1].role}</div>
                                    </div>
                                </div>
                                <span className="nh-card__dept">{hire[1].dept}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="nh-card__footer">
                <div className="nh-card__avatars">
                    {footerAvatars.map((a, i) => (
                        (i < 5) ?
                            <img src={`${state.basePath}/${a.img}`} alt="" key={i} className="nh-card__footer-avatar" />
                            :
                            <span className="nh-card__more">+{i - 4}</span>
                    ))}
                </div>
                <a href="#view-all" className="nh-card__viewall">View all</a>
            </div>
        </div>
    )
};

export default NewHiresCard;