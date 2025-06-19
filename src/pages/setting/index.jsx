import React, { useContext, useState } from 'react'
import VerifiedTickIcon from '../../component/icons/verified-tick';
import Link3Icon from '../../component/icons/link-3';
import PlusIcon from '../../component/icons/plus';
import { Helmet } from 'react-helmet';
import { GlobalContext } from '../../context/Context';
import OrganizationOverviewService from '../organization/overview/services';
import OrganizationOverviewLocation from '../organization/overview/location';
import Header from '../../component/layout/header';
import { settingBottomNav, settingtopHeaderNav } from '../../script/tabingNavArray';


const SettingMain = () => {
  let { state } = useContext(GlobalContext);

  const [tab, setTab] = useState(0);

  const onTabChange = (value) => {
    setTab(value)
  }

  return (
    <>
      <Helmet>
        <title>Organization | Overview</title>
      </Helmet>

      <div className="webBody">
        <Header bottomTabs={settingBottomNav} topTabs={settingtopHeaderNav} />
        
        <div className="mainBody">
          <div className="teamSpaceDashboard">
            <div className="teamSpaceDashboard-coverPhoto">
              <img src={`${state.basePath}/team/cover-photo.jpg`} alt="" />
            </div>

            <div className="teamSpaceDashboard-main">
              <div className="teamSpaceDashboard-leftAside">
                <div className="tsd-la-head" style={{ flex: 'none' }}>
                  <div className="profile">
                    <span>
                      <img src={`${state.basePath}/org/profile-icon.png`} alt="" />
                    </span>

                    <div className="verifiedTick">
                      <VerifiedTickIcon />
                    </div>
                  </div>

                  <h6>Managment</h6>

                  <div className="webUrlInput">
                    <div className="icon">
                      <Link3Icon />
                    </div>
                    <input type="text" value={'www.cinecuemedia.com'} />
                  </div>
                </div>

                <div className="tsd-la-body">
                  <h6>
                    Quick Links

                    <div className="teamItems-addBtn">
                      <PlusIcon />
                    </div>
                  </h6>

                  <div className="teamItems">
                    <span>No quick links</span>
                  </div>
                </div>
              </div>

              <div className="teamSpaceDashboard-body">
                <div className="dashboardTabing">
                  <div className="dashboardTabing-nav">
                    <div className={`dashboardTabing-navItems ${tab == 0 ? "active" : ""}`} onClick={() => { onTabChange(0) }}>
                      <span>Services</span>
                    </div>

                    <div className={`dashboardTabing-navItems ${tab == 1 ? "active" : ""}`} onClick={() => { onTabChange(1) }}>
                      <span>Location</span>
                    </div>
                  </div>
                </div>

                {
                  (tab === 0) && <OrganizationOverviewService />
                }
                {
                  (tab === 1) && <OrganizationOverviewLocation />
                }

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SettingMain
