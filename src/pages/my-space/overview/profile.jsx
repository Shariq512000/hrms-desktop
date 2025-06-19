import React, { useState } from 'react'
import DotsVerticalIcon from '../../../component/icons/dots-vertical'
import MarkPin1Icon from '../../../component/icons/mark-pin-1';
import ClockRefreshIcon from '../../../component/icons/clock-refresh';
import Phone2Icon from '../../../component/icons/phone-2';
import Dataflow4Icon from '../../../component/icons/dataflow-4';
import SeatIcon from '../../../component/icons/seat';
import PhoneIcon from '../../../component/icons/phone';
import Star7Icon from '../../../component/icons/star-7';
import MarkerPin1Icon from '../../../component/icons/marker-pin-1';
import Grid2Icon from '../../../component/icons/grid-2';
import TagCloseIcon from '../../../component/icons/tag-close';
import ThemeInput from '../../../component/ui/form/theme-input';
import SortingIcon from '../../../component/icons/sorting';
import AddIcon from '../../../component/icons/add';

const Profile = () => {
    const skills = Array(6).fill({ name: 'Social Reporting and Analysis', percentage: 80 });
    const [tags, setTags] = useState(
        [
            'CEO & Founder',
            'Team Leadership',
            'Business Strategy',
            'Startup Development',
            'Talent Acquisition'
        ]
    );

    const removeTag = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    return (
        <div className="profilePage">
            <div className="card userDetailCard">
                <div className="userDetailCont">
                    <div className="detailColumn">
                        <div className="detailSec">
                            <div className="detailIcon">
                                <MarkPin1Icon />
                            </div>
                            <div className="detailData">
                                <h6>Office Location</h6>
                                <p>Phase 8</p>
                            </div>
                        </div>

                        <div className="detailSec">
                            <div className="detailIcon">
                                <ClockRefreshIcon />
                            </div>
                            <div className="detailData">
                                <h6>Time zone</h6>
                                <p>(GMT+05:00)</p>
                            </div>
                        </div>

                        <div className="detailSec">
                            <div className="detailIcon">
                                <Phone2Icon />
                            </div>
                            <div className="detailData">
                                <h6>Mobile Number</h6>
                                <p>+92 1234 56789</p>
                            </div>
                        </div>
                    </div>

                    <div className="detailColumn">
                        <div className="detailSec">
                            <div className="detailIcon">
                                <Dataflow4Icon />
                            </div>
                            <div className="detailData">
                                <h6>Department</h6>
                                <p>Creative & Pre-Production</p>
                            </div>
                        </div>

                        <div className="detailSec">
                            <div className="detailIcon">
                                <SeatIcon />
                            </div>
                            <div className="detailData">
                                <h6>Seating Location</h6>
                                <p>CA-504 (2nd Floor)</p>
                            </div>
                        </div>

                        <div className="detailSec">
                            <div className="detailIcon">
                                <PhoneIcon />
                            </div>
                            <div className="detailData">
                                <h6>Work Phone Number</h6>
                                <p>3456 78910</p>
                            </div>
                        </div>
                    </div>

                    <div className="detailColumn">
                        <div className="detailSec">
                            <div className="detailIcon">
                                <Star7Icon />
                            </div>
                            <div className="detailData">
                                <h6>Shift</h6>
                                <p>General</p>
                            </div>
                        </div>

                        <div className="detailSec">
                            <div className="detailIcon">
                                <MarkerPin1Icon />
                            </div>
                            <div className="detailData">
                                <h6>Email ID</h6>
                                <p>kashif@cinecuemedia.com</p>
                            </div>
                        </div>

                        <div className="detailSec">
                            <div className="detailIcon">
                                <Grid2Icon />
                            </div>
                            <div className="detailData">
                                <h6>Extension</h6>
                                <p>6870</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="welcomeCard-more">
                    <div className="welcomeCard-moreBtn">
                        <DotsVerticalIcon />
                    </div>
                </div>
            </div>

            <div className="card aboutCard">
                <div className="about-content">
                    <h6>About</h6>
                    <p>
                        Schergeil Parvez is a Pakistani entrepreneur and creative professional, best known as the Founder and CEO of Legendesk (Pvt.) Ltd., an IT services company based in Karachi. Under his leadership since its founding in 2017, Legendesk has grown into a mid-sized firm offering services such as digital marketing, web and app development, SaaS solutions, branding, and video animation.
                        <br />
                        <br />
                        Schergeil is recognized for his commitment to team development and fostering a culture of learning within his organization. He actively engages in talent acquisition, as evidenced by his LinkedIn posts seeking professionals to join his team. <u>LinkedIn</u>
                        <br />
                        <br />
                        Beyond his corporate role, Schergeil maintains a presence on various social media platforms, including <u>Instagram</u>, <u>YouTube</u>, <u>Threads</u>, and <u>SoundCloud</u>, where he shares content related to his interests in travel, food, photography, and personal development.
                        <br />
                        <br />
                        For more information about Schergeil Parvez and his work, you can visit his LinkedIn profile LinkedIn or the Legendesk website
                    </p>
                </div>
                <div className="welcomeCard-more">
                    <div className="welcomeCard-moreBtn">
                        <DotsVerticalIcon />
                    </div>
                </div>
            </div>

            <div className="card skillsCard">
                <div className="skill-content">
                    <div className="headSec">
                        <h3>Skill Set</h3>
                        <div className="welcomeCard-more">
                            <div className="welcomeCard-moreBtn">
                                <DotsVerticalIcon />
                            </div>
                        </div>
                    </div>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div className="skill-card" key={index}>
                                <span className="skill-name">{skill.name}</span>
                                <div className="progress-wrapper">
                                    <div className="progress-bar">
                                        <div className="progress" style={{ width: `${skill.percentage}%` }}></div>
                                    </div>
                                    <span className="percentage">{skill.percentage}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="card tagCard">
                <div className="tag-content">
                    <div className="headSec">
                        <h3>Tags</h3>
                        <div className="welcomeCard-more">
                            <div className="welcomeCard-moreBtn">
                                <DotsVerticalIcon />
                            </div>
                        </div>
                    </div>
                    <div className="tags-list">
                        {tags.map((tag, index) => (
                            <div className="tag-chip" key={index}>
                                {tag}
                                <span className="remove-btn" onClick={() => removeTag(tag)}>
                                    <TagCloseIcon />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="card basicInfoCard">
                <div className="basicInfo-content">
                    <div className="headSec">
                        <h3>Basic information</h3>
                        <div className="welcomeCard-more">
                            <div className="welcomeCard-moreBtn">
                                <DotsVerticalIcon />
                            </div>
                        </div>
                    </div>
                    <div className="info-grid">
                        <div className="info-item">
                            <ThemeInput defaultValue={"HRM1"} label={"Employee ID"} />
                        </div>
                        <div className="info-item">
                            <ThemeInput defaultValue={"Schergil"} label={"First Name"} />
                        </div>
                        <div className="info-item">
                            <ThemeInput defaultValue={"Parvez"} label={"Last Name"} />
                        </div>
                        <div className="info-item">
                            <ThemeInput defaultValue={"Sherry"} label={"Nick Name"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"schergil@legendsdesk.org"} label={"Email Address"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput type="tel" defaultValue={"+923453088629"} label={"Phone"} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card workInfoCard">
                <div className="workInfo-content">
                    <div className="headSec">
                        <h3>Work Information</h3>
                        <div className="welcomeCard-more">
                            <div className="welcomeCard-moreBtn">
                                <DotsVerticalIcon />
                            </div>
                        </div>
                    </div>
                    <div className="info-grid">
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"Business Unit Head"} label={"Department"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"CEO & Founder"} label={"Company Role"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"Phase 8"} label={"Location"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"Permanent"} label={"Employment Type"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"CEO & Founder"} label={"Designation"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"Active"} label={"Employee Status"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"Direct"} label={"Source of Hire"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"21-Apr-2025"} label={"Date of Joining"} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card workInfoCard">
                <div className="workInfo-content">
                    <div className="headSec">
                        <h3>Personal Details</h3>
                        <div className="welcomeCard-more">
                            <div className="welcomeCard-moreBtn">
                                <DotsVerticalIcon />
                            </div>
                        </div>
                    </div>
                    <div className="info-grid">
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"14/02/1986"} label={"Date of Birth"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"--"} label={"Ask me about/Expertise"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"Married"} label={"Marital Status"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"--"} label={"About me"} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card workInfoCard">
                <div className="workInfo-content">
                    <div className="headSec">
                        <h3>Contact Details</h3>
                        <div className="welcomeCard-more">
                            <div className="welcomeCard-moreBtn">
                                <DotsVerticalIcon />
                            </div>
                        </div>
                    </div>
                    <div className="info-grid">
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"--"} label={"Work Phone Number"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"--"} label={"Personal Mobile Number"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"--"} label={"Extension"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"--"} label={"Personal Email Address"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"--"} label={"Seating Location"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"--"} label={"Tags"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"--"} label={"Present Address"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"--"} label={"Permanent Address"} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card workInfoCard">
                <div className="workInfo-content">
                    <div className="headSec">
                        <h3>System Fields</h3>
                        <div className="welcomeCard-more">
                            <div className="welcomeCard-moreBtn">
                                <DotsVerticalIcon />
                            </div>
                        </div>
                    </div>
                    <div className="info-grid">
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"1 - Schergeil - Parvez"} label={"Added By"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"1 - Schergeil - Parvez"} label={"Modified By"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"21-Apr-2025 09:51 PM"} label={"Added Time"} />
                        </div>
                        <div className="info-item wide">
                            <ThemeInput defaultValue={"21-Apr-2025 11:47 PM"} label={"Modified Time"} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="headSec">
                    <h3>Work Experience</h3>
                    <div className="welcomeCard-more">
                        <div className="welcomeCard-moreBtn">
                            <DotsVerticalIcon />
                        </div>
                    </div>
                </div>
                <table className="theme-table">
                    <thead>
                        <tr>
                            <td>
                                <div className="cell-heading">
                                    <p>Company name</p>
                                    <span>
                                        <SortingIcon />
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="cell-heading">
                                    <p>Job Title</p>
                                    <span>
                                        <SortingIcon />
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="cell-heading">
                                    <p>From Date</p>
                                    <span>
                                        <SortingIcon />
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="cell-heading">
                                    <p>To Date</p>
                                    <span>
                                        <SortingIcon />
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="cell-heading">
                                    <p>Job Description</p>
                                    <span>
                                        <SortingIcon />
                                    </span>
                                </div>
                            </td>
                            <td>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="cell-content">
                                    <h6><b>Legendesk</b></h6>
                                    <p>www.egendesk.com</p>
                                </div>
                            </td>

                            <td>
                                <div className="cell-content">
                                    <h6>CEO and Founder</h6>
                                    <p>Business Unit Head</p>
                                </div>
                            </td>

                            <td>
                                <div className="cell-content">
                                    <h6><b>Jan 2017</b></h6>
                                </div>
                            </td>

                            <td>
                                <div className="cell-content">
                                    <h6><b>Current</b></h6>
                                </div>
                            </td>

                            <td>
                                <div className="cell-content">
                                    <p className="des">
                                        Schergeil Parvez is a Pakistani entreprene...
                                    </p>
                                </div>
                            </td>

                            <td>
                                <div className="welcomeCard-more">
                                    <div className="welcomeCard-moreBtn">
                                        <DotsVerticalIcon />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="cell-content">
                                    <h6><b>Legendesk</b></h6>
                                    <p>www.egendesk.com</p>
                                </div>
                            </td>

                            <td>
                                <div className="cell-content">
                                    <h6>CEO and Founder</h6>
                                    <p>Business Unit Head</p>
                                </div>
                            </td>

                            <td>
                                <div className="cell-content">
                                    <h6><b>Jan 2017</b></h6>
                                </div>
                            </td>

                            <td>
                                <div className="cell-content">
                                    <h6><b>Current</b></h6>
                                </div>
                            </td>

                            <td>
                                <div className="cell-content">
                                    <p className="des">
                                        Schergeil Parvez is a Pakistani entreprene...
                                    </p>
                                </div>
                            </td>

                            <td>
                                <div className="welcomeCard-more">
                                    <div className="welcomeCard-moreBtn">
                                        <DotsVerticalIcon />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="cell-content">
                                    <h6><b>Legendesk</b></h6>
                                    <p>www.egendesk.com</p>
                                </div>
                            </td>

                            <td>
                                <div className="cell-content">
                                    <h6>CEO and Founder</h6>
                                    <p>Business Unit Head</p>
                                </div>
                            </td>

                            <td>
                                <div className="cell-content">
                                    <h6><b>Jan 2017</b></h6>
                                </div>
                            </td>

                            <td>
                                <div className="cell-content">
                                    <h6><b>Current</b></h6>
                                </div>
                            </td>

                            <td>
                                <div className="cell-content">
                                    <p className="des">
                                        Schergeil Parvez is a Pakistani entreprene...
                                    </p>
                                </div>
                            </td>

                            <td>
                                <div className="welcomeCard-more">
                                    <div className="welcomeCard-moreBtn">
                                        <DotsVerticalIcon />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="cell-content">
                                    <h6><b>Legendesk</b></h6>
                                    <p>www.egendesk.com</p>
                                </div>
                            </td>

                            <td>
                                <div className="cell-content">
                                    <h6>CEO and Founder</h6>
                                    <p>Business Unit Head</p>
                                </div>
                            </td>

                            <td>
                                <div className="cell-content">
                                    <h6><b>Jan 2017</b></h6>
                                </div>
                            </td>

                            <td>
                                <div className="cell-content">
                                    <h6><b>Current</b></h6>
                                </div>
                            </td>

                            <td>
                                <div className="cell-content">
                                    <p className="des">
                                        Schergeil Parvez is a Pakistani entreprene...
                                    </p>
                                </div>
                            </td>

                            <td>
                                <div className="welcomeCard-more">
                                    <div className="welcomeCard-moreBtn">
                                        <DotsVerticalIcon />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="card">
                <div className="headSec">
                    <h3>Education Details</h3>
                    <div className="welcomeCard-more">
                        <div className="welcomeCard-moreBtn">
                            <DotsVerticalIcon />
                        </div>
                    </div>
                </div>
                <table className="theme-table">
                    <thead>
                        <tr>
                            <td>
                                <div className="cell-heading">
                                    <p>Institute Name</p>
                                    <span>
                                        <SortingIcon />
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="cell-heading">
                                    <p>Degree/Diploma</p>
                                    <span>
                                        <SortingIcon />
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="cell-heading">
                                    <p>Specialization</p>
                                    <span>
                                        <SortingIcon />
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="cell-heading">
                                    <p>Date of Completion</p>
                                    <span>
                                        <SortingIcon />
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='addMore-row' colSpan={4}>
                                <div className="more-container">
                                    <div className='moreBtn'>
                                        <AddIcon />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="card">
                <div className="headSec">
                    <h3>Dependent Details</h3>
                    <div className="welcomeCard-more">
                        <div className="welcomeCard-moreBtn">
                            <DotsVerticalIcon />
                        </div>
                    </div>
                </div>
                <table className="theme-table">
                    <thead>
                        <tr>
                            <td>
                                <div className="cell-heading">
                                    <p>Name</p>
                                    <span>
                                        <SortingIcon />
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="cell-heading">
                                    <p>Relationship</p>
                                    <span>
                                        <SortingIcon />
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="cell-heading">
                                    <p>Date of Completion</p>
                                    <span>
                                        <SortingIcon />
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='addMore-row' colSpan={3}>
                                <div className="more-container">
                                    <div className='moreBtn'>
                                        <AddIcon />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Profile;