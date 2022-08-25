import React from "react";

class Block extends React.Component{
    constructor(){
        super();
        this.state = { count: 0, required: 0, pressed: 0 }
    }
    
    addOne = (s) =>{
        return s.pressed + 1;
    }


    addRectangle = () =>{
        if(this.state.required <= this.state.pressed){
            this.setState(s => ({count: s.count + 1, required: s.required + 1, pressed: 0 }));
        }
        else{
            this.setState(s => ({pressed: s.pressed + 1}));
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