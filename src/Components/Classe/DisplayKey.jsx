import React from "react";

class DisplayKey extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            keyCode: null
        }
    }

    // Avoir le code de touch presser
    handlerKeyUp = (e) => {
        console.log("addEventListener in class activee");
        this.setState({
            keyCode: e.code
        })
    }
    // Monter le composant
    componentDidMount(){
        document.addEventListener("keyup", this.handlerKeyUp)
    }
    // Nettoyer le componentDidMount
    componentWillUnmount(){
        console.log("addEventListener in class arrete");
        document.removeEventListener("keyup", this.handlerKeyUp)
    }

    render(){
        const {keyCode} = this.state;
        return(
            <div className="card">
                <div className="card-body">
                    <h3>Display key NAME</h3>
                    <h4>Key code <em>{keyCode}</em></h4>
                </div>
            </div>
        )
    }
}

export default DisplayKey;