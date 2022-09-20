import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function RightJoin(){

    const [clients, setClients] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3005/clients/right').then(res => setClients(res.data));
    })


    return(
        <ul className="trees">
            <h2>RightJoin</h2>
        {
            clients.map(c => <li className="tree-row">
                <span>ID: {c.id}</span>
                <span>{c.name}</span>
                <span>PHONE ID: {c.ph_id}</span>
                <span>{c.phone}</span>
            </li>)
        }
        </ul>
    );
}

export default RightJoin;