import { useEffect } from "react";
import { useState } from "react";

function Upload(){

    const [value, setValue] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() =>{
        if(value < 100 && start)
        {
            const interId = setInterval(() => {
                setValue(v => v + 1);               
            }, 20);
                    
            return () => clearInterval(interId);
        }
    }, [start, value]);
    const startLoad = () =>{
        setStart(true);
    }

    const stopLoad = () =>{
        setStart(false);
    }
    
    const cancelLoad = () =>{
        setStart(false);
        setValue(0);
    }
                
    function CheckStage(){
        if(!start && value > 0 && value !== 100)
            return (<h2>{value}% Stopped!</h2>);
        else if(value === 0)
            return (<h2>{value}% Ready!</h2>);
        else if(value < 100)
            return (<h2>{value}% Uploading!</h2>);
        else if(value === 100)
            return (<h2>{value}% Done!</h2>);
        else
            return (<h2>{value}% No wait, stop!</h2>);
    }
    //<CheckStage />
    return (
        <div className="upload">
            <h1>Choose a file</h1>
            <div className="bubble-container">
                <CheckStage />
                {value !== 100 && start ? <div className="bubble"></div> : null}
            </div>
            <div className="progress">
                <div className="progress-bg">
                    <div className="progress-value" style={{width: value + '%'}}>

                    </div>
                </div>
            </div>
            <button className="btn-upload" onClick={startLoad}>Upload</button>
            <button className="btn-upload" onClick={stopLoad}>Stop</button>
            <button className="btn-upload" onClick={cancelLoad}>Cancel</button>
        </div>
    );
}

export default Upload;