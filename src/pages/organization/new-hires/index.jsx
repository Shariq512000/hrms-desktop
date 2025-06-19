import React, { useContext } from 'react'
import PhoneCall1Icon from '../../../component/icons/phone-call-1';
import Star1Icon from '../../../component/icons/star-1';
import { GlobalContext } from '../../../context/Context';
import { Helmet } from 'react-helmet';

const cards = [
    {
        date: "28",
        month: "April",
        name: "Subhan Khatri",
        id: "2025001",
        email: "subhan@cinecuemedia.com",
        role: "Cinematographer & Video Editor",
        dept: "Creative & Pre-Production",
        img: "team/1.png",
    },
    {
        date: "21",
        month: "April",
        name: "Subhan Khatri",
        id: "2025001",
        email: "subhan@cinecuemedia.com",
        role: "Cinematographer & Video Editor",
        dept: "Creative & Pre-Production",
        img: "team/1.png",
    },
];

const OrganizationNewHires = () => {
    let { state } = useContext(GlobalContext);

    return (
        <>
            <Helmet>
                <title>Organization | New Hires</title>
            </Helmet>
            <div className="mainBody">
                <div className="welcome-list">
                    {cards.map((card, i) => (
                        <div className="welcome-card" key={i}>
                            <div className="welcome-card__avatar-row">
                                <div className="welcome-card__datebox">
                                    <span className="welcome-card__date">{card.date}</span>
                                    <span className="welcome-card__month">{card.month}</span>
                                </div>

                                <img src={`${state.basePath}/${card.img}`} className="welcome-card__avatar" alt={card.name} />

                                <div className="welcome-card__icons">
                                    <button className="welcome-card__iconbtn" title="Call">
                                        <PhoneCall1Icon />
                                    </button>
                                    <button className="welcome-card__iconbtn" title="Star">
                                        <Star1Icon />
                                    </button>
                                </div>
                            </div>

                            <div className="welcome-card__content">
                                <div className="">
                                    <div className="welcome-card__name">{card.name}</div>
                                    <div className="welcome-card__id">{card.id}</div>
                                </div>

                                <div className="">
                                    <div className="welcome-card__email">{card.email}</div>
                                    <div className="welcome-card__role">{card.role}</div>
                                    <div className="welcome-card__dept">{card.dept}</div>
                                </div>

                                <div className="">
                                    <div className="welcome-card__cta">Send a Welcome Note</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default OrganizationNewHires
