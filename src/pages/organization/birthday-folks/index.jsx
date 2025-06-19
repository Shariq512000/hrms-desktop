import React, { useContext } from 'react'
import Filter3FillIcon from '../../../component/icons/filter-3-fill';
import ArrowDownsLineIcon from '../../../component/icons/arrow-downs-line';
import SortDescIcon from '../../../component/icons/sort-desc';
import { GlobalContext } from '../../../context/Context';
import { Helmet } from 'react-helmet';

const teamMembers = [
    {
        img: "team/1.png",
        name: "Subhan Khatri",
        id: "2025001",
        email: "subhan@cinemcuedia.com",
        role: "Cinematographer & Video Editor",
        dept: "Creative & Pre-Production",
    },
    {
        img: "team/2.png",
        name: "Jabar Khalid",
        id: "2025002",
        email: "Jabar@cinemcuedia.com",
        role: "Cinematographer & Video Editor",
        dept: "Creative & Pre-Production",
    },
];

const OrganizationBirthdayFolks = () => {
    let { state } = useContext(GlobalContext);

    return (
        <>
            <Helmet>
                <title>Organization | Birthday</title>
            </Helmet>
            <div className="mainBody">
                <div className="birthday_page">
                    <div className="birthday_page-filter">
                        <div className="birthday_page-filter-left">
                            <div className="bpfl-select">
                                <select>
                                    <option value="0">Today</option>
                                </select>
                                <span>Status</span>
                            </div>
                        </div>
                        <div className="birthday_page-filter-right">
                            <div className="bpfl-action">
                                <div className="bpfl-actionItems">
                                    <div className="bpfl-actionBtn">
                                        <div className="icon">
                                            <Filter3FillIcon />
                                        </div>

                                        Filter
                                    </div>
                                </div>

                                <div className="bpfl-actionItems">
                                    <div className="bpfl-actionBtn">
                                        <div className="icon">
                                            <SortDescIcon />
                                        </div>

                                        Sort By

                                        <div className="selectDropIcon">
                                            <ArrowDownsLineIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="team-grid">
                        {teamMembers.map((m, i) => (
                            <div className="team-card" key={i}>
                                <div className="team-card__avatar-wrap">
                                    <img src={`${state.basePath}/${m.img}`} className="team-card__avatar" alt={m.name} />
                                </div>

                                <div className="team-card__content">
                                    <div className="">
                                        <div className="team-card__name">{m.name}</div>
                                        <div className="team-card__id">{m.id}</div>
                                    </div>

                                    {(m.email && m.role && m.dept) &&
                                        <div className="">
                                            <div className="team-card__email">{m.email}</div>
                                            <div className="team-card__role">{m.role}</div>
                                            <div className="team-card__dept">{m.dept}</div>
                                        </div>
                                    }

                                    {(m.checkin && m.team) &&
                                        <div className="">
                                            <div className="team-card__checkin">{m.checkin}</div>
                                            <div className="team-card__team">{m.team}</div>
                                        </div>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrganizationBirthdayFolks
