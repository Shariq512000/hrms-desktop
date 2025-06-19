import React, { useEffect, useState } from 'react'
import Header from '../../component/layout/header'
import { reporteesTopHeaderNav } from '../../script/tabingNavArray'
import Home3Icon from '../../component/icons/home-3'
import ChevronRightIcon from '../../component/icons/chevron-right'
import DistributeSpacingVertical from '../../component/icons/distribute-spacing-vertical'
import CalendarIcon from '../../component/icons/calendar'
import SpeedUpLineIcon from '../../component/icons/speed-up-line'
import More2FillIcon from '../../component/icons/more-2-fill'
import { Helmet } from 'react-helmet'

const leaveData = [
  { type: "Annual leave", value: 21, color: "#00BFFF" },
  { type: "Casual Leaves", value: 20, color: "#FF0000" },
  { type: "Sick Leaves", value: 15, color: "#8A2BE2" },
];



const ReportAnalytics = () => {
  const data = leaveData;
  const [animatedWidths, setAnimatedWidths] = useState([]);

  const calculateMaxValue = (data) => {
    const max = Math.max(...data.map((item) => item.value));
    return Math.max(Math.ceil(max / 5) * 5, 5);
  };

  const maxValue = calculateMaxValue(data);

  const generateScaleSteps = () => {
    const steps = [];
    for (let i = 0; i <= maxValue; i += 5) {
      steps.push(i);
    }
    return steps;
  };

  useEffect(() => {
    // Trigger animation after short delay (simulate smooth fill)
    const timeout = setTimeout(() => {
      const widths = data.map((item) => (item.value / maxValue) * 100);
      setAnimatedWidths(widths);
    }, 100); // Delay ensures CSS transition triggers

    return () => clearTimeout(timeout);
  }, [data, animatedWidths, maxValue]);

  return (
    <>
      <Helmet>
        <title>Report | Analytics</title>
      </Helmet>
      <div className="webBody" style={{ paddingRight: '0' }}>
        <Header topTabs={reporteesTopHeaderNav} isBottom={false} />

        <div className="mainBody">
          <div className="reportAnalyticsDashboard">
            <div className="reportAnalyticsDashboard-head">
              <div className="reportAnalyticsDashboard-head-left">
                <div className="radhl-nav">
                  <div className="radhl-nav_icon">
                    <Home3Icon />
                  </div>

                  <div className="radhl-nav_chevron"><ChevronRightIcon /></div>
                  <div className="radhl-nav_title">Leave Tracker</div>
                  <div className="radhl-nav_chevron"><ChevronRightIcon /></div>
                  <div className="radhl-nav_title">Leave balance</div>
                  <div className="radhl-nav_chevron"><ChevronRightIcon /></div>
                  <div className="radhl-nav_title">1 Schergeil Parvez</div>
                </div>
              </div>
              <div className="reportAnalyticsDashboard-head-right">
                <div className="radhr-actionArea">
                  <div className="radhr-actionArea_iconItem">
                    <DistributeSpacingVertical />
                  </div>

                  <div className="radhr-actionArea_iconItem">
                    <CalendarIcon />
                  </div>

                  <div className="radhr-actionArea_items">Apply Leaves</div>
                </div>
              </div>
            </div>

            <div className="reportAnalyticsDashboard-body">
              <div className="leave-chart">
                <div className="leave-chart__header">
                  <span className="leave-chart__title">
                    <div className="icon">
                      <SpeedUpLineIcon />
                    </div>
                    Leave Chart
                  </span>

                  <div className="leave-chart__more">
                    <div className="leave-chart__moreBtn"><More2FillIcon /></div>
                  </div>
                </div>

                <div className="leave-chart__scale">
                  <div className="leave-chart__label" />

                  <div className="leave-chart__scale-steps">
                    {generateScaleSteps().map((step, index) => (
                      <span key={index} className="leave-chart__scale-step">
                        {step}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="leave-chart__grid">
                  {data.map((item, index) => (
                    <div className="leave-chart__row" key={index}>
                      <div className="leave-chart__label">{item.type}</div>
                      <div className="leave-chart__bar-wrapper">
                        <div
                          className="leave-chart__bar"
                          style={{
                            width: `${animatedWidths[index] || 0}%`,
                            backgroundColor: item.color,
                          }}
                        >
                          <span className="leave-chart__value">{item.value}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReportAnalytics
