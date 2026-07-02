import React from 'react'

export default function Button({handleClick, children}) {
   console.log(`rendering button ${children}`);
  return (
    <p>
      <button type='button' onClick={handleClick}>{children}</button>
    </p>
  )
}
