import React from 'react'
import { teamBottomNav, topHeaderNav } from '../../script/tabingNavArray'
import { Outlet, useLocation } from 'react-router'
import Header from '../../component/layout/header'

const TeamMainPageLayout = () => {
  const location = useLocation();
  const hideHeader = location.pathname === '/team/profile';

  return (
    <div className="webBody" style={hideHeader ? {paddingRight: '0'} : {}}>
      <Header bottomTabs={teamBottomNav} topTabs={topHeaderNav} isBottom={!hideHeader} />
      <Outlet />
    </div>
  )
}

export default TeamMainPageLayout
