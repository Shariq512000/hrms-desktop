import React from 'react'

const ThemeInput = ({defaultValue, label, type="text"}) => {
  return (
    <div className="custom-input">
        <label>{label}</label>
        <input type={type} defaultValue={defaultValue} />
    </div>
  )
}

export default ThemeInput
