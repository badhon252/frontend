import React, { useState, useCallback, useMemo } from "react";
import MyContext from "../../Context/MyContext";
import Title from "./Title";
import ShowCount from "./ShowCount";
import Button from "./Button";

export default function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //? useCallback is used to prevent the function from being recreated on every render by remembering the function *reference

  const increment1 = useCallback(() => {
    setCount1((prev) => prev + 1);
  }, []);

  const increment2 = useCallback(() => {
    setCount2((prev) => prev + 5);
  }, []);

  //? useMemo is used to prevent the function from being recreated on every render by remembering the function *return value
  const isOddorEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i += 1;
    console.log("isOddorEven called...");
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <>
      <Title />
      <MyContext>{({ message }) => <h1>{message}</h1>}</MyContext>
      <ShowCount count={count1} title="Counter 1" />
      <Button handleClick={increment1}> Increament By One </Button>
      <span>{isOddorEven ? "Even" : "Odd"}</span>
      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={increment2}> Increament By Five </Button>
    </>
  );
}
