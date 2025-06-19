import React, { useContext } from 'react'
import DotsVerticalIcon from '../../../component/icons/dots-vertical'
import UploadCloud2Icon from '../../../component/icons/upload-cloud-2';
import CheckCircleIcon from '../../../component/icons/check-circle';
import Trash1Icon from '../../../component/icons/trash-1';
import { GlobalContext } from '../../../context/Context';

const Files = () => {
    let { state } = useContext(GlobalContext);

    const files = [
        {
            fileImg: "file-logo/docx.png",
            fileName: "Certificate.docx",
            fileSize: "200 KB of 200 KB",
            progressPercentage: 100
        },
        {
            fileImg: "file-logo/doc.png",
            fileName: "Deploma.doc",
            fileSize: "6.4 MB of 16 MB",
            progressPercentage: 100
        },
        {
            fileImg: "file-logo/pdf.png",
            fileName: "Resume.pdf",
            fileSize: "3.4 MB of 4.2 MB",
            progressPercentage: 100
        }
    ]

  return (
    <div className='fileTabPage'>
        <div className="card uploaderCard">
            <div className="headSec">
                <h3 className='main'>Files</h3>
                <div className="welcomeCard-more">
                    <div className="welcomeCard-moreBtn">
                        <DotsVerticalIcon />
                    </div>
                </div>
            </div>
            <div className="uploadCardBody">
                <input type='file' />
                <div className="logo">
                    <UploadCloud2Icon />
                </div>
                <div className="content">
                    <h6>Click to upload <span>or drag and drop</span></h6>
                    <p>Personal uploads and files shared with you will be displayed here</p>
                </div>
            </div>
        </div>
        <div className="card fileCard">
            <div className="headSec">
                <h3 className='main'>Files</h3>
                <div className="welcomeCard-more">
                    <div className="welcomeCard-moreBtn">
                        <DotsVerticalIcon />
                    </div>
                </div>
            </div>
            <div className="innerCardContainer">
                {files?.map((eachFile , i) => (
                    <div key={i} className="innerFileCard">
                        <div className="fileLogo">
                            <img src={`${state.basePath}/${eachFile?.fileImg}`} alt="DOCX" />
                        </div>
                        <div className="file-content">
                            <div className="file-detail">
                                <h6>{eachFile?.fileName}</h6>
                                <p>{eachFile?.fileSize} <span> <CheckCircleIcon /> Complete</span></p>
                            </div>
                            <div className="progress-container">
                                <div className="progress-bar">
                                    <div className="completed" style={{width: `${eachFile?.progressPercentage}%`}}></div>
                                </div>
                                <div className="progress-number">{eachFile?.progressPercentage}%</div>
                            </div>
                        </div>
                        <div className="deleteBtn">
                            <Trash1Icon />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Files;