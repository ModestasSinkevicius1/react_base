import React from "react";

class Block extends React.Component{
    constructor(){
        super();
        this.state = { count: 0, required: 0, pressed: 0 }
    }
    
    addRectangle = () =>{
        if(this.state.required <= this.state.pressed){
            this.setState({count: this.state.count + 1, required: this.state.required + 1, pressed: 0 });
        }
        else{
            this.setState({ pressed: this.state.pressed + 1 });
        }
    }
    
    render(){
        let cubes = [];
        for(let i=0;i<this.state.count;i++){
            cubes.push(<div key={i} className="block"></div>)
        } 

        return(
            <div className="change">
                <button className='btn-change' onClick={this.addRectangle}>Add</button>
                <div className="block-container">
                    {cubes}
                </div>
            </div>
        );
    }
}

export default Block;