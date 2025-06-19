import React, { useContext } from 'react'
import SearchIcon from '../../../component/icons/search';
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
        checkin: "Yet to check-in",
        team: "5 members in Subhan's team"
    },
    {
        img: "team/2.png",
        name: "Jabar Khalid",
        id: "2025002",
        email: "Jabar@cinemcuedia.com",
        role: "Cinematographer & Video Editor",
        dept: "Creative & Pre-Production",
        checkin: "Yet to check-in",
        team: "-"
    },
    {
        img: "team/3.png",
        name: "Rashid Ameer",
        id: "2025004",
        email: "Rashid@cinemcuedia.com",
        role: "Cinematographer & Video Editor",
        dept: "Creative & Pre-Production",
        checkin: "Yet to check-in",
        team: "-"
    },
    {
        img: "team/4.png",
        name: "Sara khan",
        id: "2025001",
        email: "sara@cinemcuedia.com",
        role: "Cinematographer & Video Editor",
        dept: "Creative & Pre-Production",
        checkin: "Yet to check-in",
        team: "You've 25 members in your team"
    },
    {
        img: "team/5.png",
        name: "Ashton Blackwell",
        id: "2025001",
        email: "subhan@cinemcuedia.com",
        role: "Cinematographer & Video Editor",
        dept: "Creative & Pre-Production",
        checkin: "Yet to check-in",
        team: "You've 25 members in your team"
    },
];

const OrganizationDepartmentDirectory = () => {
    let { state } = useContext(GlobalContext);
    return (
        <>
            <Helmet>
                <title>Organization | Directory</title>
            </Helmet>
            <div className="mainBody">
                <div className="teamSpaceDashboard">
                    <div className="teamSpaceDashboard-main" style={{ marginTop: 24 }}>
                        <div className="teamSpaceDashboard-leftAside">
                            <div className="tsd-la-head" style={{ flex: 'none' }}>
                                <div className="webUrlInput">
                                    <div className="icon">
                                        <SearchIcon />
                                    </div>
                                    <input type="text" placeholder='Search Departments' />
                                </div>
                            </div>

                            <div className="tsd-la-body">
                                <div className="teamItems deparmentDirectory-teamItems active">
                                    <span>Business & Operations</span>
                                </div>

                                <div className="teamItems deparmentDirectory-teamItems">
                                    <span>Creative & Pre-Production</span>
                                </div>

                                <div className="teamItems deparmentDirectory-teamItems">
                                    <span>Digital & Social Media</span>
                                </div>

                                <div className="teamItems deparmentDirectory-teamItems">
                                    <span>Human Resource</span>
                                </div>

                                <div className="teamItems deparmentDirectory-teamItems">
                                    <span>Brand Department</span>
                                </div>

                                <div className="teamItems deparmentDirectory-teamItems">
                                    <span>Production</span>
                                </div>
                            </div>
                        </div>

                        <div className="teamSpaceDashboard-body">
                            <div className="businessOperationCard card">
                                <div className="businessOperationCard-left">
                                    <div className="profile">
                                        <img src={`${state.basePath}/dashboard/content.jpg`} alt="" />
                                    </div>

                                    <div className="userData">
                                        <h6>1 - Schergeil Parvez</h6>
                                        <p>Department Head</p>
                                    </div>
                                </div>

                                <div className="businessOperationCard-center">
                                    <h5>Business & Operations</h5>
                                </div>

                                <div className="businessOperationCard-right">
                                    <h6>200</h6>
                                    <p>Members</p>
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

                                            <div className="">
                                                <div className="team-card__email">{m.email}</div>
                                                <div className="team-card__role">{m.role}</div>
                                                <div className="team-card__dept">{m.dept}</div>
                                            </div>

                                            <div className="">
                                                <div className="team-card__checkin">{m.checkin}</div>
                                                <div className="team-card__team">{m.team}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrganizationDepartmentDirectory
