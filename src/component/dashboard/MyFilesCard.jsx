import React, { useContext, useState } from "react";
import "../../styles/component/dashboard/MyFilesCard.css";
import DotsVerticalIcon from "../icons/dots-vertical";
import { GlobalContext } from "../../context/Context";

const organizationFiles = [
    { type: "JPG", name: "Receipt_January_2025.pdf", size: "200 KB" },
    { type: "JPG", name: "Receipt_January_2025.pdf", size: "200 KB" },
    { type: "JPG", name: "Receipt_January_2025.pdf", size: "200 KB" },
    { type: "JPG", name: "Receipt_January_2025.pdf", size: "200 KB" },
];

const employeeFiles = [
    { type: "JPG", name: "Receipt_January_2025.pdf", size: "200 KB" },
    { type: "JPG", name: "Receipt_January_2025.pdf", size: "200 KB" },
];

export default function MyFilesCard() {
    const [tab, setTab] = useState("org");
    let { state } = useContext(GlobalContext);

    return (
        <div className="card myfiles-card">
            <div className="myfiles-header">
                <div>
                    <div className="myfiles-title">My Files</div>
                    <div className="myfiles-desc">
                        Here is the important file list below:
                    </div>
                </div>
                <div className="myfiles-dots"><DotsVerticalIcon /></div>
            </div>

            <div className="myfiles-tabs">
                <span
                    className={tab === "org" ? "active" : ""}
                    onClick={() => setTab("org")}
                >
                    Organization Files
                </span>
                <span
                    className={tab === "emp" ? "active" : ""}
                    onClick={() => setTab("emp")}
                >
                    Employee Files
                </span>
            </div>

            <div className="myfiles-list">
                {(tab === "org") ?
                    organizationFiles.map((file, idx) => (
                        <div className="myfiles-row" key={idx}>
                            <div className="myfiles-file">
                                <div className="myfiles-icon">
                                    <img src={`${state.basePath}/dashboard/jpg_icon.png`} alt="" />
                                </div>
                                <div>
                                    <div className="myfiles-filename">{file.name}</div>
                                    <div className="myfiles-size">{file.size}</div>
                                </div>
                            </div>
                            <button className="myfiles-view">View</button>
                        </div>
                    ))
                    :
                    (tab === "emp")
                        ?
                        employeeFiles.map((file, idx) => (
                            <div className="myfiles-row" key={idx}>
                                <div className="myfiles-file">
                                    <div className="myfiles-icon">
                                        <img src={`${state.basePath}/dashboard/jpg_icon.png`} alt="" />
                                    </div>
                                    <div>
                                        <div className="myfiles-filename">{file.name}</div>
                                        <div className="myfiles-size">{file.size}</div>
                                    </div>
                                </div>
                                <button className="myfiles-view">View</button>
                            </div>
                        ))
                        :
                        ''
                }
            </div>
        </div>
    );
}