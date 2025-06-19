import React, { useContext } from 'react'
import DotsVerticalIcon from '../../../component/icons/dots-vertical'
import { GlobalContext } from '../../../context/Context';

const TimeSheets = () => {
    let { state } = useContext(GlobalContext);
  return (
    <>
        <div className="card welcomeCard">
            <div className="welcomeCard-user">
                <div className="profileImage">
                    <span>
                        <img src={`${state.basePath}/dashboard/content.jpg`} alt="" />
                    </span>
                </div>

                <div className="detail">
                    <h6>Good Morning Schergeil.Parvez</h6>
                    <p>Have a productive day! </p>
                </div>
            </div>

            <div className="welcomeCard-more">
                <div className="welcomeCard-moreBtn">
                    <DotsVerticalIcon />
                </div>
            </div>
        </div>
    </>
  )
}

export default TimeSheets;