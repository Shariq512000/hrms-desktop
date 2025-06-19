import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../component/layout/header'
import { leaveBottomHeader, leaveTopHeader } from '../../script/tabingNavArray'

const LeaveMainPage = () => {
  return (
    <div className="webBody">
        <Header topTabs={leaveTopHeader} bottomTabs={leaveBottomHeader} />
        <Outlet />
    </div>
  )
}

export default LeaveMainPage