import {useState, useCallback} from 'react'
import Title from './Title'
import ShowCount from './ShowCount'
import Button from './Button'

export default function Counter() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const increment1 = useCallback(() => {
        setCount1(prev=> prev + 1)
    },[]);

    const increment2 = useCallback(() => {
        setCount2(prev=> prev + 5)
    }, []);

    const isOddorEven = ()=>{
      console.log('isOddorEven called...')
      while(i < 10000000000) i++;
      return count1 % 2 === 0;
    }
  return (
    <>
        <Title/>
        <ShowCount count={count1} title="Counter 1"/>
        <Button handleClick={increment1}> Increament By One </Button>
        <span>{isOddorEven() ? "Even" : "Odd"}</span>
        <hr />
        <ShowCount count={count2} title="Counter 2"/>
        <Button handleClick={increment2}> Increament By Five </Button>
    </>
  )
}
