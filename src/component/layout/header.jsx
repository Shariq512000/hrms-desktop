import React from 'react'
import TopHeader from './headers/top'
import BottomHeader from './headers/bottom'

const Header = ({topTabs, bottomTabs, isBottom = true}) => {
  return (
    <header>
      <TopHeader topTabs={topTabs} />
      {isBottom &&
         <BottomHeader bottomTabs={bottomTabs} />
      }
    </header>
  )
}

export default Header
