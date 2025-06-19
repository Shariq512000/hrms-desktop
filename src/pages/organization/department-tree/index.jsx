import React, { useState } from 'react'
import { DEPARTMENTS } from "./departmentData";
import DepartmentList from "./DepartmentList";
import TreeAccordion from "./TreeAccordion";

const OrganizationDepartmentTree = () => {
    // Track which department is open (department index)
    const [openDeptIdx, setOpenDeptIdx] = useState(null);

    return (
        <div className="mainBody">
            <div className="department-tree">
                <DepartmentList
                    departments={DEPARTMENTS}
                    openIdx={openDeptIdx}
                    onSelect={setOpenDeptIdx}
                />
                <div className="dept-panels">
                    {openDeptIdx !== null && (
                        <div className="dept-panel">
                            <h2>{DEPARTMENTS[openDeptIdx].name}</h2>
                            <TreeAccordion node={DEPARTMENTS[openDeptIdx].tree} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default OrganizationDepartmentTree
