import React from 'react'
import DotsVerticalIcon from '../../icons/dots-vertical'

const LeaveCard = ({cardHeading, cardLogo, available, book}) => {
  return (
    <div className="countCard">
        <div className="topSec">
            <h6>{cardHeading}</h6>
            <div className="logo">
                {cardLogo}
            </div>
        </div>
        <div className="bottomSec">
            <div className="cont">
                <h6 className='heading'>Available</h6>
                <h6 className="value">{available}</h6>
            </div>

            <div className="cont">
                <h6 className='heading'>Booked</h6>
                <h6 className="value">{book}</h6>
            </div>
        </div>
        <div className="welcomeCard-more">
            <div className="welcomeCard-moreBtn">
                <DotsVerticalIcon />
            </div>
        </div>
    </div>
  )
}

export default LeaveCard
