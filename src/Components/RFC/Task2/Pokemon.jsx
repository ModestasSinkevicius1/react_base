function Pokemon(props){
    return (
        <li className="pokemon">
            <a href={props.url}>{props.name}</a>
        </li>
    );
}

export default Pokemon;