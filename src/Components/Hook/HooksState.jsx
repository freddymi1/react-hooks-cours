import React, { useState } from 'react'

export default function HooksState(){
    const [counter, setCounter] = useState(0)

    const upCounter = ()=>{
        // setCounter(counter+1)
        // OU
        setCounter((prevCounter)=>prevCounter+1)
    }

    const downCounter = () =>{
        // setCounter(counter-1)
        // oU
        setCounter((prevCounter)=>prevCounter-1)
    }

    return(
        <div className='hooksState'>
            <h3>Hooks state</h3>
            <p>Hooks counter: {counter}</p>
            <div>
                <button className='btn' onClick={()=>upCounter()}>Up counter hooks</button>
                <button className='btn' onClick={()=>downCounter()}>Down counter hooks</button>
            </div>
        </div>
    )
}