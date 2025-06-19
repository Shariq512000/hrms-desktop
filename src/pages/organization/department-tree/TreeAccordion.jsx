import React, { useState } from "react";

export default function TreeAccordion({ node }) {
    const [openChild, setOpenChild] = useState(null);

    if (!node) return null;

    return (
        <div className="tree-accordion">
            <div
                className={`tree-node ${node.children ? "expandable" : ""}`}
                onClick={e => {
                    // Prevent event bubbling to toggle parent nodes
                    e.stopPropagation();
                    if (!node.children) return;
                    setOpenChild(openChild === 0 ? null : 0);
                }}
            >
                <div><b>{node.role}:</b> {node.name}</div>
                {node.children && (
                    <span className="arrow">{openChild === 0 ? "▼" : "►"}</span>
                )}
            </div>
            {node.children && openChild === 0 && (
                <div className="tree-children">
                    {node.children.map((child, idx) => (
                        // Accordion: Only one open at a time!
                        <div key={idx}>
                            <TreeAccordion
                                node={child}
                            // pass childOpenIdx and setChildOpenIdx for deeper levels 
                            // (for stricter accordion, see code comments below)
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}