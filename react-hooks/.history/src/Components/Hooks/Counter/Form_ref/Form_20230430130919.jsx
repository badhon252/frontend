import React, { useRef, useEffect, useState } from "react";
import Form_Result from "./Form_Result";
import Input_Ref from "./Input_Ref";
import Time from "./Time";
//? I'm using "useRef()" to changing state without event handling, It's a good practice to use "useRef()" for this purpose.
//? Using the "useRef" i can change the state without the onChange event function.
function Form() {
  const [bool, setBool] = useState(true);
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();

  // যেটা কারণ ছাড়াই প্রতিবার রেন্ডারিং এর জন্যে রান করতেছে সেটাকে useEffect হুকের মধ্যে এইভাবে দিয়ে দিতে হবে।
  useEffect(() => {
    nameRef.current.focus();
    console.log("HELLO");
  }, []); // Because of empty dependice it will run once

  useEffect(() => {
    console.log("Component loaded");

    return () => {
      console.log("Component Unloaded");
    };
  }, [Form_Result]);

  const submit = (e) => {
    setBool((prev) => !prev);
    setName(nameRef.current.value);
    setEmail(emailRef.current.value);

    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <>
      <form action="#">
        <Input_Ref type="text" placeholder="Enter your name" ref={nameRef} />
        <Input_Ref type="email" placeholder="Enter your email" ref={emailRef} />
        <button type="button" onClick={submit}>
          Log-in
        </button>
      </form>

      <Form_Result name={name} email={email} bool={bool} />
      <Time />
    </>
  );
}

export default React.memo(Form);
