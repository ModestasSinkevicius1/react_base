import React from "react";

class Addition extends React.Component{
    constructor(){
        super();
        this.state = { number: 0 }
    }
    
    update 

    add = () =>{
        this.setState({number: this.state.number + 1 });
    }

    subtract = () =>{
        this.setState({number: this.state.number - 3 });
    }
    
    render(){
        return(
            <div className="change">
                <span>{this.state.number}</span>
                <div className="btn container">
                    <button className='btn-change' onClick={this.add}>+</button>
                    <button className='btn-random' onClick={this.subtract}>-</button>
                </div>
            </div>
        );
    }
}

export default Addition;