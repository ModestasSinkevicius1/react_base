import { useState } from "react";
import { useEffect } from "react";
import Books from "./Books";

function fetchData(url, data){
    fetch(url).then(res => res.json()).then((result)=>{
            data(result);
    },
    //catch
    (_) => {
        data('error');
    })
}

function BooksFetch(){

    const [books, setBooks] = useState(null);
    const [types, setType] = useState(null);

    useEffect(() =>{
        fetchData('https://in3.dev/knygos/', setBooks);
        fetchData('https://in3.dev/knygos/types/', setType)
    }, [])


    if(books && types)
        return(       
            <Books books={books} types={types}/>
        );
    else
        return(       
            <h1 className="fetch-stage">loading</h1>
        );
}

export default BooksFetch;