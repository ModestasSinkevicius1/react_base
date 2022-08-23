import React from "react";
import rand from "../../Utilities/random.js";

class Change extends React.Component{
    constructor(){
        super();
        this.state = { radius: '0', number: rand(5, 25) }
    }
    
    changeShape = () =>{
        this.state.radius === '0' ? this.setState({radius: '50%'}) : this.setState({radius: '0'});
    }

    changeNumber = () =>{
        this.setState({number: rand(5, 25)});
    }
    
    render(){
        return(
            <div className="change" style={{borderRadius: this.state.radius}}>
                <span>{this.state.number}</span>
                <button className='btn-change' onClick={this.changeShape}>Change</button>
                <button className='btn-random' onClick={this.changeNumber}>Random</button>
            </div>
        );
    }
}

export default Change;