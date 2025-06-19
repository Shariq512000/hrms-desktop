import React from 'react'

const ThemeDropdown = ({options}) => {
  return (
    <div className="customDropdown">
        <select>
            {options?.map((e , i) => (
                <option value={e.value}>{e?.name}</option>
            ))}
            {/* <option value="Software">Software Team</option> */}
        </select>
    </div>
  )
}

export default ThemeDropdown
