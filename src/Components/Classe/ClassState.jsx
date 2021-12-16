import React, {Component} from 'react';

class ClassState extends Component{

    constructor(props){
        super(props)
        this.state={
            counter: 0
        }
    }

    upCounter=()=>{
        // this.setState({
        //     counter: this.state.counter+1
        // })
        // OU
        this.setState((prevState)=>{
            return{
                counter: prevState.counter + 1
            } 
        })
    }

    downCounter=()=>{
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render(){
        return(
            <div className='classState'>
                <h3>Class state</h3>
                <p>Class counte: {this.state.counter}</p>
                <div>
                    <button className='btn' onClick={this.upCounter}>Up counter State</button>
                    <button className='btn' onClick={this.downCounter}>Down counter State</button>
                </div>
            </div>
        )
    }
}
export default ClassState;