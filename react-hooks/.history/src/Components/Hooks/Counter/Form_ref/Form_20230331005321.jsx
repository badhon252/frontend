import React, {useRef, useEffect, useState} from 'react'

export default function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const nameRef = useRef()
    const emailRef = useRef()
    
    useEffect(()=>{
        nameRef.current.focus()
    },[])

    const submit = () => {
        console.log("name : " + name)
        console.log("email : " + email)

        nameRef.current.value = ''
        emailRef.current.value = ''
    }
    
    const nameHandler = () =>{
        setName(nameRef.current.value)
    }

    const emailHandler = (e) =>{
        setEmail(e.target.value)
    }
  return (
        <form action="#">
        <input type="text" placeholder="Enter your name" onChange={nameHandler} value={name} ref={nameRef} />
        <input type="text" placeholder="Enter your email" onChange={emailHandler} value={email} ref={emailRef} />
        <button type='button' onClick={submit}>Log-in</button>
        </form>
  )
}
