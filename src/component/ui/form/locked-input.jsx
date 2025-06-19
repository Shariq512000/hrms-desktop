import React from 'react'
import LockUnlocked3 from '../../icons/lock-unlocked-3'

const LockedInput = ({label , defaultValue, isLocked}) => {
  return (
    <div className='lockedInput'>
        <label htmlFor="">{label} <span><LockUnlocked3 /></span> </label>
        <input type="text" defaultValue={defaultValue} />
    </div>
  )
}

export default LockedInput
