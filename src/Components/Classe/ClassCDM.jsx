import React, {Component} from 'react'

class ClassCDM extends Component{

    constructor(props){
        super(props)
        this.state={
            counter: 0,
            name: ''
        }
    }

    componentDidMount(){
        document.title = `Vous avez cliquee ${this.state.counter} fois`
    }

    // Mettre a jour le titre du site
    // Autoriser la modification du state si counter !== prevState.counter 
    // cad si l'etat du counter actuel !== etat avant
    componentDidUpdate(prevCounter, prevState){
        
        if(this.state.counter !== prevState.counter){
            console.log('OKOK')
            document.title = `Vous avez cliquee ${this.state.counter} fois`
        }
    }

    handlerCounter = () =>{
        this.setState((prevCounter)=>{
            return{
                counter: prevCounter.counter+1
            }
        })
    }
    render(){
        return(
            <div>
                <h3>Update DOM avec class</h3>
                <h3>Counter: {this.state.counter}</h3>
                <input type="text" value={this.state.name} onChange={(e)=>this.setState({
                    name: (e.target.value)
                })} placeholder='Todo name' className='input-form' />
                <button className='btn' onClick={this.handlerCounter}>Update counter</button>
            </div>
        )
    }
}

export default ClassCDM;