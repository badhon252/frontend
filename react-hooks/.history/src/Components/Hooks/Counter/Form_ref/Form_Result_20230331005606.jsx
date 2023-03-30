import React from 'react'

export default function Form_Result({name, email}) {
  return (
    <div>
        <h1>Login Details:</h1>
        <p>{name}</p>
        <p>{email}</p>
        
    </div>
  )
}
