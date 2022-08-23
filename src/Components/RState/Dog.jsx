import React from "react";
import Show from "./Show";

class Dog extends React.Component{

    constructor(){
        super();
        this.state = {size: 50, type: 'small'};
    }

    doIt = () =>{
        this.state.size === 50 ? this.setState({size: 120, type: 'big'}) : this.setState({size: 50, type: 'small'});
    }

    render(){
        return(
            <div className="dog">
                <Show color={this.props.color} size={this.state.size} type={this.state.type} />
                <button className="btn-dog" onClick={this.doIt}>Press me</button>
            </div>
        );
    };
}

export default Dog;