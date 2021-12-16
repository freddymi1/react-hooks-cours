import React, { useReducer } from 'react'

// const initialState = 0;
const initialState = {
    counterOne: 0,
    counterTwo: 0
}

const reducer = (state, action) =>{
    // switch(action){
    //     case 'increment':
    //         return state + 1
    //     case 'decrement':
    //         return state - 1

    //     case 'reset':
    //         return initialState

    //     default:
    //         return state
    // }
    // OU
    switch(action.type){
        case 'increment':
            return {...state, counterOne: state.counterOne + action.value}
        case 'decrement':
            return {...state, counterOne: state.counterOne - action.value}

        case 'increment2':
            return {...state, counterTwo: state.counterTwo + action.value}
        case 'decrement2':
            return {...state, counterTwo: state.counterTwo - action.value}

        case 'reset':
            return initialState

        default:
            return state
    }
}


const CountFunction = () => {
    const [counter, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <div className="df">
                <div>
                    <h3>{counter.counterOne}</h3>
                    <div className='btnAction'>
                        {/* <button onClick={()=>dispatch('increment')} className='btnUp'>+</button>
                        <button onClick={()=>dispatch('decrement')} className='btnDown'>-</button> */}

                        <button onClick={()=>dispatch({type: 'increment', value: 1})} className='btnUp'>+</button>
                        <button onClick={()=>dispatch({type: 'decrement', value: 1})} className='btnDown'>-</button>
                    </div>
                </div>
                <div>
                    <h3>{counter.counterOne * counter.counterTwo}</h3>
                </div>
                <div>
                    <h3>{counter.counterTwo}</h3>
                    <div className='btnAction'>
                        <button onClick={()=>dispatch({type: 'increment2', value: 2})} className='btnUp'>+</button>
                        <button onClick={()=>dispatch({type: 'decrement2', value: 2})} className='btnDown'>-</button>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={()=>dispatch({type: 'reset'})} className='btnS'>0</button>
            </div>
        </div>
    )
}

export default CountFunction;