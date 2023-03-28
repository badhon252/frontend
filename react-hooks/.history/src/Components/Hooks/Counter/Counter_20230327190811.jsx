import {useState} from 'react'
import Title from './Title'
import ShowCount from './ShowCount'
import Button from './Button'

export default function Counter() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const increment1 = () => {
        setCount1(prev=> prev + 1)
    }
    const increment2 = () => {
        setCount1(prev=> prev + 5)
    }
  return (
    <>
        <Title/>
        <ShowCount count={count1}/>
        <Button onClick={increment1}/>
        <hr />
        <Title/>
        <ShowCount count={count2}/>
        <Button onClick={increment2}/>
    </>
  )
}
