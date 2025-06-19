import React from 'react'
import Header from '../../component/layout/header'
import { reporteesTopHeaderNav } from '../../script/tabingNavArray'
import { Link } from 'react-router'
import SearchLGIcon from '../../component/icons/search-lg'
import Star1Icon from '../../component/icons/star-1'
import SunSetting2Icon from '../../component/icons/sun-setting-2'
import Umbrella2Icon from '../../component/icons/umbrella-2'
import { Helmet } from 'react-helmet'

const report = [
  {
    header : {
      icon : <SunSetting2Icon />,
      title : 'Leave Tracker'
    },
    body : [
      {
        icon : <Star1Icon />,
        title : 'Career History'
      }
    ]
  },
  {
    header : {
      icon : <Umbrella2Icon />,
      title : 'Leave Tracker'
    },
    body : [
      {
        icon : <Star1Icon />,
        title : 'Leave balance'
      }
    ]
  },
  {
    header : {
      icon : <SunSetting2Icon />,
      title : 'Attendance'
    },
    body : [
      {
        icon : <Star1Icon />,
        title : 'Early/late check-in and check-out'
      },
      {
        icon : <Star1Icon />,
        title : 'Present/absent status'
      },
      {
        icon : <Star1Icon />,
        title : 'Presence hours break-up'
      },
    ]
  },
  {
    header : {
      icon : <SunSetting2Icon />,
      title : 'Time Tracker'
    },
    body : [
      {
        icon : <Star1Icon />,
        title : 'Time Logs'
      },
      {
        icon : <Star1Icon />,
        title : 'Jobs status'
      },
      {
        icon : <Star1Icon />,
        title : 'Projects status'
      },
      {
        icon : <Star1Icon />,
        title : 'Scheduled vs Worked hours'
      },
    ]
  },
  {
    header : {
      icon : <SunSetting2Icon />,
      title : 'Leave Tracker'
    },
    body : [
      {
        icon : <Star1Icon />,
        title : 'Learner progress'
      }
    ]
  },
  {
    header : {
      icon : <SunSetting2Icon />,
      title : 'Leave Tracker'
    },
    body : [
      {
        icon : <Star1Icon />,
        title : 'Requested vs Closed'
      },
      {
        icon : <Star1Icon />,
        title : 'Overall status'
      }
    ]
  },
]

const  MyReport = () => {
  return (
    <>
      <Helmet>
        <title>Report | My Report</title>
      </Helmet>
      <div className="webBody" style={{ paddingRight: '0' }}>
        <Header topTabs={reporteesTopHeaderNav} isBottom={false} />

        <div className="mainBody">
          <div className="reportDashboard">
            <div className="reportDashboard-head">
              <Link href='' className="reportDashboard-headAccessBtn">Access Permissions</Link>

              <div className="reportDashboard-headSearchBar">
                <div className="reportDashboard-headSearchBarInput">
                  <div className="icon">
                    <SearchLGIcon />
                  </div>

                  <input type="text" placeholder='Search Reports' />
                </div>
              </div>
            </div>

            <div className="reportDashboard-body">
              <div className="myReportGrop">
                {report.map((e, i) => {
                  return (
                    <div key={i} className="myReportCard">
                      <div className="myReportCard-head">
                        <div className="icon">{e?.header?.icon}</div>
                        <h6>{e?.header?.title}</h6>
                      </div>
      
                      <div className="myReportCard-body">
                        <ul>
                          {
                            e?.body.map((ele, inx) => {
                              return (
                                <li key={inx}>
                                  <div className="icon">{ele?.icon}</div>
                                  <p>{ele?.title}</p>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyReport
