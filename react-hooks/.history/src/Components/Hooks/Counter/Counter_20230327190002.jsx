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
        setCount1(prev=> prev + 1)
    }
  return (
    <>
        <Title/>
        <ShowCount/>
        <Button/>
    </>
  )
}
