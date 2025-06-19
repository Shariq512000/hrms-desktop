import React from 'react'
import PhoneCall1Icon from '../icons/phone-call-1'
import CubeOutlineIcon from '../icons/cube-outline'
import { Link } from 'react-router'

const EmployeeCard = ({ imgSrc, name, designation, status, isBottom = false }) => {
    return (
        <Link to={"/team/profile"} className="employeeCard">
            <div className="topSec" style={isBottom ? { paddingBottom: 16 } : {}}>
                <div className="userFullDetail">
                    <div className="userProfile">
                        <span>
                            <img src={`${imgSrc}`} alt="" />
                        </span>
                        <div className="online"></div>
                    </div>
                    <div className="userData">
                        <h6>{name}</h6>
                        <p>{designation}</p>
                        <span>{status}</span>
                    </div>
                </div>
                <div className="iconGroup">
                    <PhoneCall1Icon />
                    <CubeOutlineIcon />
                </div>
            </div>
            {isBottom &&
                <div className="bottomSec">
                    <h6>Afternoon - <b>12:00 PM - 9:00 PM</b></h6>
                </div>
            }
        </Link>
    )
}

export default EmployeeCard
