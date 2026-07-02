import React from 'react'

export default function Input_Ref() {
  return (
    <input type="text" placeholder="Enter your name" onChange={nameHandler} value={name} ref={nameRef} />
  )
}
