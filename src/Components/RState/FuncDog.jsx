import { useState } from "react";
import randColor from '../../Utilities/random_color.js'
import rand from '../../Utilities/random.js'

function Dog(props){
    const [size, setSize] = useState(50);
    const [text, setText] = useState('small')
    const [sq, setSq] = useState([]);

    const doIt = () =>{
        setSize(s => s === 50 ? 90 : 50);
        setText(t => t === 'small' ? 'BIG' : 'small');
        //Use only when you need to edit state and use it only on callbacks (functions)
        // setSize(s => s + 20);
        // setSize(s => s + 20);
        // setSize(s => s + 20);
    }

    const add = () =>{
        setSq(s => [...s, {color: randColor(), number: rand(100, 1000), row: s.length, hide: false}]);
        setSq(s => [...s.sort((a, b) => b.number - a.number)]);
    }

    const sort = () =>{
        setSq(s => [...s.sort((a, b) => a.number - b.number)]);
    }

    const revert = () =>{
        setSq(s => [...s.sort((a, b) => a.row - b.row)]);
    }

    const showAll = () =>{
        setSq(s => s.map(a => ({...a, hide: false})));
    }

    const showCondition = () =>{
        setSq(s => s.map(a => a.number > 500 ? {...a, hide: false} : {...a, hide: true}));
    }

    return(
        <div className="dog">
            <h1 style={{color:props.color, fontSize: size + 'px'}}>Here {text}</h1>
            <button className="btn-dog" onClick={doIt}>Press me</button>
            <div className="block-container">
                {
                    sq.map((a, i)=> <div className="block" key={i} style={{backgroundColor: a.color, display: a.hide === false ? 'block' : 'none'}}>
                        <h1>{a.number}</h1>
                    </div>)
                }
            </div>
            <button className="btn-dog" onClick={add}>Add me</button>
            <button className="btn-dog" onClick={sort}>Sort</button>
            <button className="btn-dog" onClick={revert}>Original</button>

            <button className="btn-dog" onClick={showAll}>Show all</button>
            <button className="btn-dog" onClick={showCondition}>Show condition</button>
        </div>
    );
}

export default Dog;