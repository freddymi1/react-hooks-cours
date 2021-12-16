import React, {useEffect, useState} from 'react'

const HooksCounter = () =>{
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('')

    const handlerCounter =()=>{
        setCounter((prevCounter)=>prevCounter+1)
    }

    // Mettre a jour le titre du site
    // Autoriser la modification du state [count]
    // Si on execute la modification qu'une seul fois, on met [] au lieu de [counter]

    useEffect(()=>{
        // setTimeout(()=>{
        //     document.title= `Vous avez cliquer ${counter} fois`
        // }, 5000)
        document.title= `Vous avez cliquer ${counter} fois`
    }, [counter])
    return(
        <div>
            <div>
                <h3>Update DOM avec Hooks</h3>
                <h3>Counter: {counter}</h3>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Todo name' className='input-form' />
                <button className='btn' onClick={handlerCounter}>Update counter</button>
            </div>
        </div>
    )
}

export default HooksCounter;