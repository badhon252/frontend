import React, {useRef, useEffect, useState} from 'react'

export default function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const nameRef = useRef()
    const emailRef = useRef()
    
    useEffect(()=>{
        nameRef.current.focus()
    },[])

    console.log('name changed')
    
    const nameHandler = () =>{
        setName(nameRef.current.value)
        console.log(name)
    }

    const emailHandler = (e) =>{
        setEmail(e.target.value)
        console.log("email : " + email)
    }
  return (
        <form action="#">
        <input type="text" placeholder="Enter your name" onChange={nameHandler} value={name} ref={nameRef} />
        <input type="text" placeholder="Enter your email" onChange={emailHandler} ref={emailRef} />
        <button type='button'>Log-in</button>
        </form>
  )
}
