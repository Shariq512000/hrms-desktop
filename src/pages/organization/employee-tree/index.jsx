import React from 'react'
import OrgNode from './org';
import { Helmet } from 'react-helmet';

const OrganizationEmployeeTree = () => {
    const treeData = {
        id: 1,
        name: "Schergil Parvez",
        title: "schergilsheikh...",
        role: 1,
        children: [
          {
            id: 2,
            name: "Schergil Parvez",
            title: "schergilsheikh...",
            children: [
              { id: 3, name: "Schergil Parvez", title: "schergilsheikh..." },
              { id: 4, name: "Schergil Parvez", title: "schergilsheikh..." }
            ]
          },
          {
            id: 5,
            name: "Schergil Parvez",
            title: "schergilsheikh...",
            children: [
              {
                id: 6,
                name: "Schergil Parvez",
                title: "schergilsheikh...",
                children: [
                  { id: 7, name: "Schergil Parvez", title: "schergilsheikh..." },
                  { id: 8, name: "Schergil Parvez", title: "schergilsheikh..." }
                ]
              },
              { id: 9, name: "Schergil Parvez", title: "schergilsheikh..." }
            ]
          }
        ]
    };

    return (
      <>
        <Helmet>
          <title>Organization | Employee Tree</title>
        </Helmet>
        <div className="org-chart-container">
          <OrgNode node={treeData} />
        </div>
      </>
    )
}

export default OrganizationEmployeeTree
