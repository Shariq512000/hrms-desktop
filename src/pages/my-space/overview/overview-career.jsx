import React from 'react'
import ThumbsUpIcon from '../../../component/icons/thumbs-up';
import EventcardSepratorIcon from '../../../component/icons/eventcard-seprator';

const OverviewCareer = () => {
    const timelineData = [
        {
            year: 2025,
            date: "01",
            month: "Febuary",
            title: "Joined the organization",
            type: "highlight"
        },
        {
            year: 2024,
            date: "01",
            month: "Febuary",
            title: "Joined the organization",
            type: "organization"
        },
    ];

    const Timeline = ({ data }) => (
        <div className="timeline-wrapper">
            {data?.map((eachEvent , i) => {
                return(
                    <div className={`timelineSec ${eachEvent?.type}`}>
                        <div className="year">{eachEvent.year}</div>
                        <div className="timeLineInnerCard">
                            <div className="eventDate">
                                <h6>{eachEvent?.date}</h6>
                                <p>{eachEvent?.month}</p>
                            </div>
                            <div className={`eventDetail ${(typeof eachEvent?.title == "object") ? "multiline" : ""}`}>
                                <div className="logo">
                                    <ThumbsUpIcon />
                                </div>
                                <div className="seprator">
                                    <EventcardSepratorIcon />
                                </div>
                                {(typeof eachEvent?.title == "string") ?
                                    <h6>
                                        {eachEvent?.title}
                                    </h6>
                                    :
                                    <div className='row-wrapper'>
                                        {eachEvent?.title?.map((eachTitle , index) => (
                                            <div className="listRow" key={index}>
                                                <div className="leftSec">
                                                    <h6>{eachTitle?.heading}</h6>
                                                </div>
                                                <div className="rightSec">
                                                    <p>{eachTitle?.detail}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );

  return (
    <div className='careerTabPage'>
        <div className="card exprienceCard">
            <div className="exprienceCont left">
                <h6>Current Experience</h6>
                <p>2 Months</p>
            </div>

            <div className="exprienceCont center">
                <h6>Total Experience</h6>
                <p>2 Months</p>
            </div>

            <div className="exprienceCont right">
                <h6>Date of Joining</h6>
                <p>2 Months</p>
            </div>
        </div>

        <div className="card timeLineCard">
            <div className=''>
                <Timeline data={timelineData} />
            </div>
        </div>
    </div>
  )
}

export default OverviewCareer;