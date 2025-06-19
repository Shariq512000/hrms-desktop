import React from 'react'

const HrProcess = () => {
  return (
    <div className='hrProcessPage'>
        <div className="card hrRequest">
            <div className="hrRequestHead">
                <h4>Raise a HR Process request</h4>
                <p>Select one of the HR Processes below to raise a request</p>
            </div>

            <div className="hrRequestBody">
                <div className="bodyBtn blue">
                    <p>
                        Department Change
                    </p>
                </div>

                <div className="bodyBtn green">
                    <p>
                        Location Change
                    </p>
                </div>

                <div className="bodyBtn orange">
                    <p>
                        Designation Change
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HrProcess;