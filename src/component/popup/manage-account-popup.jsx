import React, { useContext } from 'react';
import "../../styles/component/popup/CustomizeTabsModal.css";
import LeftSidePopupLayout from './left-side-popup-layout';
import { GlobalContext } from '../../context/Context';
import LogOut2Icon from '../icons/log-out-2';
import { Link } from 'react-router';
import HomeLineIcon from '../icons/home-line';
import VerifiedTickIcon from '../icons/verified-tick';



const ManageAccountPopup = ({ onClose, data, style }) => {
  let { state } = useContext(GlobalContext);
  return (
    <LeftSidePopupLayout onClose={onClose} className={`manageAccountModal`}>
      <div className="manageAccountModal-header">
        <div className="mamHeader-userDetail">
          <div className="profile">
            <img src={`${state.basePath}/popup/profile.png`} alt="" />

            <div className="profileVerifiedTickIcon">
              <VerifiedTickIcon />
            </div>
          </div>

          <div className="detail">
            <h6>1 Schergeil Parvez <span>Out</span></h6>
            <p>User ID: 881826697</p>
            <p>schergeilsheikh@gmail.com</p>
          </div>
        </div>

        <div className="mamHeader-actionArea">
          <div className="mamHeader-account">
            <div className="mamHeader-accountBtn">My Account</div>
          </div>

          <div className="mamHeader-out">
            <div className="mamHeader-outBtn">
              <div className="icon"><LogOut2Icon /></div>
              Sign Out
            </div>
          </div>
        </div>
      </div>

      <div className="manageAccountModal-body">
        <div className="mamBody-top">
          <div className="mamBody-topHead">
            <h6>Manage Account</h6>

            <Link href={''}>Manage Organization</Link>
          </div>

          <div className="mamBody-topBody">
            <div className="mamBody-topItems">
              <div className="img">
                <img src={`${state.basePath}/popup/icon.png`} alt="" />
              </div>

              <p>Cine Cue Madia</p>
            </div>
          </div>
        </div>

        <div className="mamBody-option">
          <div className="mamBody-optionHead">
            <h6>People Options</h6>
          </div>

          <div className="mamBody-optionBody">
            <ul>
              <li>
                <div className="icon">
                  <HomeLineIcon />
                </div>

                <p>Getting Started</p>
              </li>

              <li>
                <div className="icon">
                  <HomeLineIcon />
                </div>

                <p>Help</p>
              </li>

              <li>
                <div className="icon">
                  <HomeLineIcon />
                </div>

                <p>Contact Support</p>
              </li>

              <li>
                <div className="icon">
                  <HomeLineIcon />
                </div>

                <p>What's New</p>
              </li>

              <li>
                <div className="icon">
                  <HomeLineIcon />
                </div>

                <p>Join the HR Community</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </LeftSidePopupLayout>
  )
}

export default ManageAccountPopup
