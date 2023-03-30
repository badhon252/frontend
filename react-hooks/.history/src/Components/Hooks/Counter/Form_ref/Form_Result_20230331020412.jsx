import React from 'react'

function Form_Result({name, email}) {
  return (
    <div>
        <h1>Login Details:</h1>
        <p>{name}</p>
        <p>{email}</p>
        
    </div>
  )
}

export default React.memo(Form_Result)