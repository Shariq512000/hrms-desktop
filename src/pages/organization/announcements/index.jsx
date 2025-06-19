import React, { useContext } from 'react'
import ThumbsUpIcon from '../../../component/icons/thumbs-up';
import MessageSquare2Icon from '../../../component/icons/message-square-2';
import DotsVerticalIcon from '../../../component/icons/dots-vertical';
import { GlobalContext } from '../../../context/Context';
import { Helmet } from 'react-helmet';


const OrganizationAnnouncements = () => {
    let { state } = useContext(GlobalContext);

    return (
        <>
            <Helmet>
                <title>Organization | Announcements</title>
            </Helmet>
            <div className="mainBody">
                <div className="orgAnnouncementBox">
                    {
                        [1, 2, 3, 4].map((i, a) => {
                            return (
                                <div key={i} className="orgAnnouncementBox-card card">
                                    <div className="orgAnnouncementBox-card-left">
                                        <div className="orgAB-card-profile">
                                            <img src={`${state.basePath}/dashboard/content.jpg`} alt="" />
                                            <span className="orgAB-card-profile-status"></span>
                                        </div>

                                        <div className="detail">
                                            <h6 className='orgAB-card-title'>Welcome Aboard Cine Cue Media!</h6>

                                            <div className="orgAB-card-details">
                                                <span className='user'>Schergeil Parvez</span>
                                                <b>|</b>
                                                <span className="date">19 March 6:00 PM</span>
                                                <b>|</b>
                                                <span className="status">General</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="orgAnnouncementBox-card-right">
                                        <div className="orgAB-rightAction orgAB-action-like">
                                            15
                                            <span className="icon">
                                                <ThumbsUpIcon />
                                            </span>
                                        </div>
                                        <div className="orgAB-rightAction orgAB-action-comment">
                                            03
                                            <span className="icon">
                                                <MessageSquare2Icon />
                                            </span>
                                        </div>
                                        <div className="orgAB-rightAction orgAB-action-more">
                                            <div className="orgAB-action-moreBtn">
                                                <DotsVerticalIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default OrganizationAnnouncements
