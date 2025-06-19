import React from 'react'
import Tabing from './tabing'
import SearchIcon from '../../../icons/search'

const BottomHeader = ({bottomTabs}) => {
    return (
        <>
            <div className="bottomHeader">
                <Tabing bottomTabs={bottomTabs} />

                <div className="headerBottom_search">
                    <div className="SearchIcon">
                        <SearchIcon />
                    </div>

                    <input type="text" placeholder='Search' />

                    <span className="SearchShortCut">⌘K</span>
                </div>
            </div>
        </>
    )
}

export default BottomHeader
