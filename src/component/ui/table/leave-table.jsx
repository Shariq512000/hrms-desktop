import React from 'react'
import CalendarCheck1 from '../../icons/calendar-check-1'
import DeleteBinLineIcon from '../../icons/delete-bin-line'
import PencilLine from '../../icons/pencil-line'

const LeaveTable = ({leaves}) => {
  return (
    <table className="ulh-table">
        <tbody>
            {leaves.map((row, idx) => (
                <tr className="ulh-trow" key={idx}>
                    <td className="ulh-col-date">{row.date}</td>
                    <td className="ulh-col-main">
                        <span className="ulh-col-main-icon">
                            <CalendarCheck1 />
                        </span>
                        <span className='titleContainer'>
                            <div className="ulh-col-main-title">{row.title}</div>
                            <div className="ulh-col-main-sub">{row.subtitle}</div>
                        </span>
                    </td>
                    <td className="ulh-col-desc">{row.desc}</td>
                    <td className="ulh-col-actions">
                        <div className="actionBtn">
                            <DeleteBinLineIcon />
                        </div>
                        <div className="actionBtn">
                            <PencilLine />
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default LeaveTable
