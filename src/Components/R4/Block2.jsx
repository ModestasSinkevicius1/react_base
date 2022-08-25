import React from "react";

class Block2 extends React.Component{
    constructor(){
        super();
        this.state = { count: 0 }
        this.cubes = [];
    }
    
    addRed = () =>{    
        this.setState(s => ({pressed: s.pressed + 1}));   
        this.cubes.push(<div key={this.state.count} className="block" style={{backgroundColor: 'crimson'}}></div>)
    }

    addBlue = () =>{    
        this.setState(s => ({pressed: s.pressed + 1}));   
        this.cubes.push(<div key={this.state.count} className="block" style={{backgroundColor: 'deepskyblue'}}></div>)
    }

    reset = () =>{
        this.setState({count: 0});
        this.cubes.length = 0;
    }

    render(){
        return(
            <div className="change">
                <div className="btn-block-add-container">
                    <button className='btn-change' onClick={this.addRed}>Add red</button>
                    <button className='btn-change' onClick={this.addBlue}>Add blue</button>
                </div>
                    <button className='btn-change' onClick={this.reset}>Reset</button>
                <div className="block-container">
                    {this.cubes}
                </div>
            </div>
        );
    }
}

export default Block2;