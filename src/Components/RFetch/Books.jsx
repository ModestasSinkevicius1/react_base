import Loader from "../RLoader/Loader";

function Books(props){


    if(null === props.books){
        return(
            <Loader />
        );
    }

    return(
        <div className="books">
            <ul>
                {
                    props.books.map(b => <li key={b.id}>{b.title}</li>)
                }
            </ul>
        </div>
    );
}

export default Books;