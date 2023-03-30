import React from 'react'

export default function Input_Ref({type, placeholder,nameHandler,value},ref) {
  return (
    <input type={type} placeholder={placeholder} onChange={nameHandler} value={name} ref={ref} />
  )
}
