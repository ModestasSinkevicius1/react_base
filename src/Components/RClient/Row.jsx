import { useContext } from "react";
import TreeProvider from "../../Contexts/TreeProvider";

function Row({ t }) {

    const { types, setDeleteData, setModalData } = useContext(TreeProvider);

    const erase = () =>{
        setDeleteData({
            id: t.id,
        });
    }
    

    const edit = () =>{
        setModalData({...t});
    }

    return (
            <li>
                <span>{t.title}</span>
                <span>{types.find(tr => tr.id === tr.type)?.type }</span>
                <i>{t.height}m</i>
                <button className="btn-green btn" onClick={edit}>Edit</button>
                <button className="btn-red btn" onClick={erase}>Delete</button>
            
            </li>
    );

}

export default Row;