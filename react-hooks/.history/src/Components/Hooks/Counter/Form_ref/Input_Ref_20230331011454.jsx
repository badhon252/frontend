import React from 'react'

function Input_Ref({type, placeholder,nameHandler,value},ref) {
  return (
    <input type={type} placeholder={placeholder} onChange={nameHandler} value={name} ref={ref} />
  )
}

export default React.forwardRef(Input_Ref)