import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { topHeaderNav } from '../../../../script/tabingNavArray'
import { useLocation } from 'react-router'

const Tabing = ({ topTabs = topHeaderNav }) => {
    const [activeTab, setActiveTab] = useState("")
    const [one] = useState(1);
    const [two] = useState(2);
    const [three] = useState(3)

    const location = useLocation();

    useEffect(() => {
        let pathName = location.pathname;

        let innerOne = one;
        let innerTwo = two;
        let innerThree = three;

        if (pathName.split("/")[innerOne] === "leave") {
            if (!pathName.split("/")[innerTwo]) {
                setActiveTab('my-data')
            } else if (pathName.split("/")[innerTwo] === 'team') {
                setActiveTab('team')
            } else if (pathName.split("/")[innerTwo] === 'holiday') {
                setActiveTab('holiday')
            } else {
                if (!pathName.split("/")[innerThree]) {
                    setActiveTab('my-data')
                } else {
                    setActiveTab(pathName.split("/")[innerThree])
                }
            }
        } else if(pathName.split("/")[innerTwo] == 'analytics'){
            setActiveTab("report-analytics")
        } else {
            setActiveTab(pathName)
        }
    }, [location.pathname, one, two, three])

    return (
        <>
            <div className="headerTop_tabs">
                {topTabs?.map((eachTab, i) => {
                    return (
                        <Link key={i} to={eachTab?.url} onClick={() => { setActiveTab(eachTab?.activeKey) }} className={`headerTop_tabs__items ${(activeTab.split("/")[1] == eachTab?.activeKey || activeTab.split("/")[0] == eachTab?.activeKey || activeTab.split("/")[2] == eachTab?.activeKey) ? "active" : ""}`}>
                            <div className="icon">
                                {eachTab?.icon}
                            </div>

                            <span>{eachTab?.name}</span>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default Tabing
