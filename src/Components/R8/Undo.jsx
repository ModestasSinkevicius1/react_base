import { useRef } from "react";
import { useEffect, useState } from "react";
import rand from '../../Utilities/random.js';

function Undo(){

    const [block, setBlock] = useState(null);
    const stack = useRef([]);

    const [step, setStep] = useState(null);

    useEffect(()=>{
        if(block !== null){
            localStorage.setItem('block', JSON.stringify(block));
            stack.current.push(block);
            setStep([...stack.current]);
        }
    }, [block])

    useEffect(()=>{
        if(localStorage.getItem('block') !== null){
            setBlock(JSON.parse(localStorage.getItem('block')));
        }
    }, [])

    const add = () =>{
        setBlock(b => [...b ?? [], ...[...Array(rand(5, 10))]]);
    }

    const remove = () =>{
        setBlock([]);
    }

    const undo = () =>{
        const first = stack.current.pop();

        if(!first){
            return;
        }
        if(first.length === block.length)
            setBlock(stack.current.pop());
        else
            setBlock(first);
    }

    return(
        <div className="undo">
            <button className="btn-un" onClick={add}>Add</button>
            <button className="btn-un" onClick={remove}>Remove</button>
            <button className="btn-un" onClick={undo}>Undo</button>
            <select name="un-select" id="un-select" className="select">
                {step?.map((st, i) => 
                    <option value={i} key={i}>{i}</option>
                )}
            </select>
            <div className="blocks">
                {block?.map((_, i) => <div className="block" key={i}></div>)}
            </div>
        </div>
    );
}

export default Undo;