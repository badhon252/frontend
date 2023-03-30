import React, {useRef, useEffect, useState} from 'react'
import Form_Result from './Form_Result'

function Form() {
    const [bool, setBool] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const nameRef = useRef()
    const emailRef = useRef()
    
   // যেটা কারণ ছাড়াই প্রতিবার রেন্ডারিং এর জন্যে রান করতেছে সেটাকে useEffect হুকের মধ্যে এইভাবে দিয়ে দিতে হবে। 
    useEffect(()=>{
        nameRef.current.focus()
    },[])

    const submit = () => {
        console.log("name : " + name)
        console.log("email : " + email)

        nameRef.current.value = ''
        emailRef.current.value = ''
        setBool(prev => !prev)
    }
    
    const nameHandler = () =>{
        setName(nameRef.current.value)
    }

    const emailHandler = (e) =>{
        setEmail(e.target.value)
    }
  return (
    <>
        <form action="#" onSubmit={submit}>
        <input type="text" placeholder="Enter your name" onChange={nameHandler} value={name} ref={nameRef} />
        <input type="text" placeholder="Enter your email" onChange={emailHandler} value={email} ref={emailRef} />
        {/* <button type='button' onClick={}>Log-in</button> */}
        </form>

       {bool && <Form_Result name={name} email={email}/>}
    </>
  )
}

export default React.memo(Form)