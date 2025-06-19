import React from 'react'
import Header from '../../component/layout/header'
import { organizationBottomNav, topHeaderNav } from '../../script/tabingNavArray'
import { Outlet } from 'react-router'

const OrganizationMainPage = () => {
  return (
    <div className="webBody">
        <Header bottomTabs={organizationBottomNav} topTabs={topHeaderNav} />
        <Outlet />
    </div>
  )
}

export default OrganizationMainPage
