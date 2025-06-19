import React from 'react'
import SunSetting2Icon from '../../component/icons/sun-setting-2';
import DotsVerticalIcon from '../../component/icons/dots-vertical';
import Home1Icon from '../../component/icons/home1';
import FaceSadIcon from '../../component/icons/face-sad';
import CalendarCheck1 from '../../component/icons/calendar-check-1';
import LeaveTable from '../../component/ui/table/leave-table';
import LeaveCard from '../../component/ui/card/leave-card';
import SelectBoxCircleFill from '../../component/icons/select-box-circle-fill';
import DistributeSpacingVertical from '../../component/icons/distribute-spacing-vertical';
import CalendarIcon from '../../component/icons/calendar';
import { Helmet } from 'react-helmet';

const Leave = () => {
  const leaves = [
    {
      date: "17 Jan 2025 Mon",
      title: "Independence Day",
      subtitle: "Campaign Strategy Brainstorming",
      desc: "Schergiel Parvez is a Pakistani entrepreneur and creative professional, best known as the Founder and CEO of Legendesk (Pvt.) Ltd.",
    },
    {
      date: "17 Jan 2025 Mon",
      title: "Independence Day",
      subtitle: "Campaign Strategy Brainstorming",
      desc: "Schergiel Parvez is a Pakistani entrepreneur and creative professional, best known as the Founder and CEO of Legendesk (Pvt.) Ltd.",
    },
    {
      date: "17 Jan 2025 Mon",
      title: "Independence Day",
      subtitle: "Campaign Strategy Brainstorming",
      desc: "Schergiel Parvez is a Pakistani entrepreneur and creative professional, best known as the Founder and CEO of Legendesk (Pvt.) Ltd.",
    },
    {
      date: "17 Jan 2025 Mon",
      title: "Independence Day",
      subtitle: "Campaign Strategy Brainstorming",
      desc: "Schergiel Parvez is a Pakistani entrepreneur and creative professional, best known as the Founder and CEO of Legendesk (Pvt.) Ltd.",
    },
    {
      date: "17 Jan 2025 Mon",
      title: "Independence Day",
      subtitle: "Campaign Strategy Brainstorming",
      desc: "Schergiel Parvez is a Pakistani entrepreneur and creative professional, best known as the Founder and CEO of Legendesk (Pvt.) Ltd.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Leave | Summary</title>
      </Helmet>
      <div className="leaveMainPage">
        <div className='leaveTeamTabPage'>
          <div className="upparSec">
            <div className="leftSec">
              <p className="userName">Leave booked this year : 0</p>
              <p className="userName">Absent : 0</p>
            </div>
            <div className="rightSec">
              <div className="iconBtn">
                <DistributeSpacingVertical />
              </div>
              <div className="iconBtn">
                <CalendarIcon />
              </div>
              <div className="memberBtn">
                <span>Total Leaves: 32</span>
              </div>
            </div>
          </div>

          <div className="leaveCountSec">
            <LeaveCard cardHeading={"Annual Leaves"} cardLogo={<SunSetting2Icon />} available={0} book={0} />
            <LeaveCard cardHeading={"Casual Leaves"} cardLogo={<Home1Icon />} available={0} book={0} />
            <LeaveCard cardHeading={"Sick Leaves"} cardLogo={<FaceSadIcon />} available={0} book={0} />
          </div>

          <div className="leaveTable">
            <div className="card tableCard">
              <div className="headSec">
                <h3>Upcoming Leaves & Holidays</h3>
                <div className="welcomeCard-more">
                  <div className="welcomeCard-moreBtn">
                    <DotsVerticalIcon />
                  </div>
                </div>
              </div>
              <div className="bodySec">
                <LeaveTable leaves={leaves} />
              </div>
            </div>
          </div>

          <div className="pastLeave">
            <div className="card pastCard">
              <div className="headSec">
                <h3>Past Leave & Holidays</h3>
                <div className="welcomeCard-more">
                  <div className="welcomeCard-moreBtn">
                    <DotsVerticalIcon />
                  </div>
                </div>
              </div>
              <div className="bodySec">
                {/* <LeaveTable leaves={leaves}/> */}
                <table className='pastTable'>
                  <tbody>
                    <tr>
                      <td className='holiday'>Past Leave & Holidays</td>
                      <td className="ulh-col-main">
                        <span className="ulh-col-main-icon">
                          <CalendarCheck1 />
                        </span>
                        <span className='titleContainer'>
                          <div className="ulh-col-main-title">Annual Leave</div>
                          <div className="ulh-col-main-sub">1 day</div>
                        </span>
                      </td>
                      <td className='reason'>
                        I was Sick
                      </td>
                      <td className="status">
                        <div className="statusBadge">
                          <div className="logo">
                            <SelectBoxCircleFill />
                          </div>
                          <p>Approved</p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className='holiday'>Past Leave & Holidays</td>
                      <td className="ulh-col-main">
                        <span className="ulh-col-main-icon">
                          <CalendarCheck1 />
                        </span>
                        <span className='titleContainer'>
                          <div className="ulh-col-main-title">Annual Leave</div>
                          <div className="ulh-col-main-sub">1 day</div>
                        </span>
                      </td>
                      <td className='reason'>
                        I was Sick
                      </td>
                      <td className="status">
                        <div className="statusBadge">
                          <div className="logo">
                            <SelectBoxCircleFill />
                          </div>
                          <p>Approved</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Leave;
