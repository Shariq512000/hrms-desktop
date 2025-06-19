import React, { useContext } from 'react'
import ChevronRightIcon from '../../component/icons/chevron-right';
import Filter3FillIcon from '../../component/icons/filter-3-fill';
import SortDescIcon from '../../component/icons/sort-desc';
import ChevronDownIcon from '../../component/icons/chevron-down';
import EmployeeCard from '../../component/team/employee-card';
import { GlobalContext } from '../../context/Context';
import { Helmet } from 'react-helmet';

const LeaveShiftDetail = () => {
    let { state } = useContext(GlobalContext);

    return (
        <>
            <Helmet>
                <title>Leave | Shift Detail</title>
            </Helmet>
            <div className="leaveMainPage">
                <div className="shiftDetail">
                    <div className="filterSec">
                        <div className="leftSec">
                            <div className="imgHirarchi">
                                <div className="avatar">
                                    <img src={`${state.basePath}/dashboard/content.jpg`} alt="" />
                                </div>
                                <div className="seprator">
                                    <ChevronRightIcon />
                                </div>
                                <div className="avatar">
                                    <img src={`${state.basePath}/dashboard/header_avatar.png`} alt="" />
                                </div>
                                <div className="seprator">
                                    <ChevronRightIcon />
                                </div>
                                <div className="avatar">
                                    <img src={`${state.basePath}/dashboard/clockin-vatar.png`} alt="" />
                                </div>
                            </div>
                            <h6>S8 - Ashar Danish</h6>
                        </div>

                        <div className="rightSec">
                            <div className="filterTabing">
                                <div className="tab active">
                                    All
                                </div>
                                <div className="tab">
                                    Direct 3
                                </div>
                            </div>
                            <div className="filterBtn">
                                <Filter3FillIcon />
                                <p>Filter</p>
                            </div>
                            <div className="filterDropdown">
                                <SortDescIcon />
                                <p>Sort by</p>
                                <ChevronDownIcon />
                            </div>
                        </div>
                    </div>

                    <div className="shiftDetailMainSec">
                        <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} isBottom={true} />
                        <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} isBottom={true} />
                        <EmployeeCard imgSrc={`${state.basePath}/dashboard/clockin-vatar.png`} name={"2025001 - Subhan Khatri"} designation={"Cinematographer & Video Editor"} status={"Out"} isBottom={true} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeaveShiftDetail;
