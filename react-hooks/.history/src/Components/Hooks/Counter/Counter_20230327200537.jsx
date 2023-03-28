import {useState, useCallback} from 'react'
import Title from './Title'
import ShowCount from './ShowCount'
import Button from './Button'

export default function Counter() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const increment1 = useCallback(() => {
        setCount1(prev=> prev + 1)
    },[])
    const increment2 = () => {
        setCount2(prev=> prev + 5)
    }
  return (
    <>
        <Title/>
        <ShowCount count={count1} title="Counter 1"/>
        <Button handleClick={increment1}> Increament By One </Button>
        <hr />
        <ShowCount count={count2} title="Counter 2"/>
        <Button handleClick={increment2}> Increament By Five </Button>
    </>
  )
}
