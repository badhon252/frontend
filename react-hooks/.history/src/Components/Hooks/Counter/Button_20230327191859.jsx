import React from 'react'

export default function Button({handleClick, children}) {
  return (
    <button type='button' onClick={handleClick}>{children}</button>
  )
}
