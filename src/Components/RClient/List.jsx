import { useContext } from "react";
import TreeProvider from "../../Contexts/TreeProvider";
import Row from "./Row"

function List() {

    const { trees } = useContext(TreeProvider);

    return (
        <ul className="trees">
        <h2>List</h2>
        {
            trees.map(t => <Row key={t.id} t={t} />)
        }
        </ul>
    )

}

export default List;