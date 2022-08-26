function Book(props) {
  return (
    <div className="book">
        <div className="book-info">
            <img src={props.img} alt={props.title}></img>
            <span className="author">{props.author}</span>
        </div>
        <div className="book-price">               
            <figcaption>{props.title}</figcaption>           
            <span className="type">{props.type.title}</span>
            <span className="price">{props.price}&euro;</span>
        </div>
    </div>
  );
}

export default Book;
