import React from 'react'
import Header from '../../component/layout/header'
import { Outlet } from 'react-router'

const MySpaceMainPage = () => {
  return (
    <div className="webBody">
      <Header />
      <Outlet />
    </div>
  )
}

export default MySpaceMainPage
