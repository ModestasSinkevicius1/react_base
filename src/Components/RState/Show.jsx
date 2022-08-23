import React from "react";

class Show extends React.Component{
    render(){
        return(
            <div className="dog">
                <h1 style={{
                    color: this.props.color,
                    fontSize: this.props.size + 'px',
                }}>Hello {this.props.type}</h1>
            </div>
        );
    };
}

export default Show;