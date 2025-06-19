import React from 'react'
import MarkerPin2Icon from '../../../component/icons/marker-pin-2'
import LinkExternal2Icon from '../../../component/icons/link-external-2'
import Copy6Icon from '../../../component/icons/copy-6'


const OrganizationOverviewLocation = () => {
    return (
        <div className="itteammap-layout">
            <div className="itteammap-sidebar">
                <div className="itteammap-sidebar-select">
                    <select>
                        <option value="0">IT Team</option>
                        <option value="1">Sale Team</option>
                        <option value="2">Software Team</option>
                        <option value="3">Dev Team</option>
                    </select>
                </div>

                <div className="itteammap-card">
                    <div className="itteammap-card-icon">
                        <MarkerPin2Icon />
                    </div>
                    <div className="itteammap-card-content">
                        <h6>
                            <span>Phase 8</span>

                            <div className="itteammap-card-icon">
                                <div className="itteammap-card-icon-items">
                                    <Copy6Icon />
                                </div>
                                <div className="itteammap-card-icon-items">
                                    <LinkExternal2Icon />
                                </div>
                            </div>
                        </h6>
                        <p>2nd Floor, 29C, Lane 3,DHA, Phase 8, Karachi, Sindh, PAKISTAN, 00000</p>
                    </div>

                </div>
            </div>

            <div className="itteammap-mapwrap">
                <iframe
                    title="IT Location"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0, borderRadius: "13px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.855944550576!2d67.05653247601753!3d24.817063448823288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e7f86da535b%3A0xcf2fecd3c2c2b8e6!2sDHA%20Phase%208%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                    allowFullScreen=""
                    aria-hidden="false"
                ></iframe>
            </div>
        </div>
    )
}

export default OrganizationOverviewLocation
