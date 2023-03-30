import React, {useRef, useEffect, useState} from 'react'

export default function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const nameRef = useRef()
    const emailRef = useRef()

    const nameHandler = () =>{
        setName(nameRef.current.value)
        nameRef.current.focus()
        console.log(name)
    }
  return (
        <form action="#">
        <input type="text" placeholder="Enter your name" onChange={nameHandler} ref={nameRef} />
        <input type="text" placeholder="Enter your email" />
        <button type='button'>Log-in</button>
        </form>
  )
}
