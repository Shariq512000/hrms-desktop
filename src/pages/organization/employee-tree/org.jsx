import React, { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../../../context/Context";

const OrgNode = ({ node, number }) => {
  const [expanded, setExpanded] = useState(true);
  let {state} = useContext(GlobalContext);

  const container = useRef()

  useEffect(() => {
    let child = null;
    let sibling = null;
    if(expanded && node.children){
        child = container.current.querySelector(":scope > .children-container");
        sibling = container.current.nextElementSibling;
        console.log("child" , child.offsetHeight - 94)
        console.log("sibling" , sibling)
        if(sibling){
            let verticle = sibling.querySelector(":scope > .node-card > .vertical")
            console.log("Verticle" , verticle)
            verticle.style.height = `${child.offsetHeight - 95 + verticle.offsetHeight}px`
        }
    }else{
        sibling = container.current.nextElementSibling;
        if(sibling){
            let verticle = sibling.querySelector(":scope > .node-card > .vertical")
            verticle.style.removeProperty('height')
        }
    }
    console.log("container" , container.current)
  } ,[expanded])

  return (
    <div className="org-node" ref={container}>
        {/* style={{ transform: "rotate(90deg)" }} */}
      <div className="node-card" onClick={() => setExpanded(!expanded)}>
        <div className="avatar">
            <img src={`${state.basePath}/dashboard/content.jpg`} alt="" />
            <div className="online" />
        </div>
        <div className="info">
          <div className="name">{node.name}</div>
          <div className="title">{node.title}</div>
        </div>
        {node?.role != 1 ? 
        <>
            {number ?
                <div className="connector vertical" />
                :
                null
            }
            <div className="connector horizontal" style={number ? {width: 30, left: -30} : {}} />
        </> : null}
      </div>

      {node.children && expanded && (
        <>
          {/* <div className="connector vertical" /> */}
          <div className="children-container">
            {/* <div className="connector horizontal" /> */}
            {node.children.map((child , i) => (
              <OrgNode key={child.id} number={i} node={child} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default OrgNode;