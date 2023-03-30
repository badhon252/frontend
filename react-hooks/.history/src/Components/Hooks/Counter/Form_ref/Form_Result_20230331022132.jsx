import React from 'react'

function Form_Result({name, email, bool}) {
  return (
    <ul>
        <h1>Login Details:</h1>
        {bool && 
          <>
            <li>{name}</li>
            <li>{email}</li>
          </>
        }
    </ul>
  )
}

export default React.memo(Form_Result)