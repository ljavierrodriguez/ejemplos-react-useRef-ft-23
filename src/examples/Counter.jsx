import React, { useRef, useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6'

const Counter = () => {

    //const [count, setCount] = useState(0)

    const count = useRef(0) 

    const incrementar = () => {
        //setCount(count + 1)
        count.current++
        console.log(count.current)
    }

    const decrementar = () => {
        //setCount(count - 1)
        count.current--
        console.log(count.current)
    }

    return (
        <div className='btn-group'>
            <button className='btn btn-info btn-sm' onClick={decrementar}><FaMinus /></button>
            {/* <button className='btn btn-warning btn-sm'>Count: {count.current}</button> */}
            <button className='btn btn-info btn-sm' onClick={incrementar}><FaPlus /></button>
        </div>
    )
}

export default Counter