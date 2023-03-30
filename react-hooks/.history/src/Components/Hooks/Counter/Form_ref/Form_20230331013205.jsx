import React, {useRef, useEffect, useState} from 'react'
import Form_Result from './Form_Result'
import Input_Ref from './Input_Ref';

function Form() {
    const [bool, setBool] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const nameRef = useRef()
    const emailRef = useRef()
    
   // যেটা কারণ ছাড়াই প্রতিবার রেন্ডারিং এর জন্যে রান করতেছে সেটাকে useEffect হুকের মধ্যে এইভাবে দিয়ে দিতে হবে। 
    useEffect(()=>{
        nameRef.current.focus()
        console.log("HELLO")
    },[]) // Because of empty dependice it will run once 

    const submit = (e) => {
        e.preventDefault()

        setBool(prev => !prev)
        setName(nameRef.current.value)
        setEmail(emailRef.current.value)
    }

  return (
    <>
        <form action="#">
        <Input_Ref type="text" placeholder="Enter your name" ref={nameRef} />
        <Input_Ref type="email" placeholder="Enter your email" ref={emailRef} />
        <button type='button' onClick={submit}>Log-in</button>
        </form>

       {bool && <Form_Result name={name} email={email}/>}
    </>
  )
}

export default React.memo(Form)