import React from 'react'

function Form_Result({name, email}) {
  return (
    <ul>
        <h1>Login Details:</h1>
        <>{name}</>
        <li>{email}</li>
        
    </ul>
  )
}

export default React.memo(Form_Result)