import React from 'react'

function Input_Ref({type, placeholder,value},ref) {
  return (
    <input type={type} placeholder={placeholder} onChange={Handler} value={value} ref={ref} />
  )
}

export default React.forwardRef(Input_Ref)
