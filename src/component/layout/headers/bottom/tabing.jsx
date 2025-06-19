import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { mySpaceBottomNav } from '../../../../script/tabingNavArray'

const Tabing = ({ bottomTabs = mySpaceBottomNav }) => {

    const [activeTab, setActiveTab] = useState("/")
    const location = useLocation();
    const [two] = useState(2);
    const [one] = useState(1);
    const [three] = useState(3)

    useEffect(() => {

        let pathName = location.pathname;

        let innerOne = one;
        let innerTwo = two;

        if ((pathName.split("/")?.length === innerTwo || pathName.split("/")[innerTwo] === '')) {
            if (pathName.split("/")[innerOne] === "my-space" || pathName.split("/")[innerOne] === "organization") {
                setActiveTab('overview')
            } else if (pathName.split("/")[innerOne] === "team") {
                setActiveTab('space')
            } else if (pathName.split("/")[innerOne] === "leave") {
                setActiveTab('summary')
            }
        } else {
            if (pathName.split("/")[innerOne] === "leave" && (pathName.split("/")[innerTwo] === "team" || pathName.split("/")[innerTwo] === "holiday")) {
                setActiveTab("summary")
            } else {
                setActiveTab(pathName.split("/")[innerTwo])
            }
        }
    }, [location?.pathname, one, two])

    return (
        <div className="headerBottom_tabs">
            {bottomTabs?.map((eachTab, i) => {
                return (
                    <Link key={i} to={location.pathname.split("/")[one] === "leave" ? `${eachTab?.url}/${(location.pathname.split("/")[two] === 'team' || location.pathname.split("/")[two] === 'holiday') ? location.pathname.split("/")[two] : (location.pathname.split("/")[three] === 'team' || location.pathname.split("/")[three] === 'holiday') ? location.pathname.split("/")[three] : ""}` : eachTab?.url} onClick={() => { setActiveTab(eachTab?.activeKey) }} className={`headerBottom_tabs__items ${(activeTab === eachTab?.activeKey) ? "active" : ""}`}>
                        <span>{eachTab?.name}</span>
                    </Link>
                )
            })}
        </div>
    )
}

export default Tabing
