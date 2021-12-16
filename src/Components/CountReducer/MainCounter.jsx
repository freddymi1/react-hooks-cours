import React from 'react'
import CountFunction from './CountFonction';

class MainCounter extends React.Component{
    render(){
        return(
            <div>
                <h3>UseReducer using react hooks</h3>
                <h4>Increment counter</h4>
                <CountFunction/>
            </div>
        )
    }
}

export default MainCounter;