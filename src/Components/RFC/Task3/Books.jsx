import Book from "./Book";

function Books(props) {
  if (props.books === "error" || props.titles === "error") {
    return (
      <div className="books">
        <h1 className="msg-book">Failed to get books</h1>
      </div>
    );
  }
  return (
    <div className="books">
      <h1 className="msg-book">Book list</h1>
      <div className="books-container">
        {props.books.map((b) => (
          <Book
            key={b.id}
            img={b.img}
            title={b.title}
            author={b.author}
            price={b.price}
            type={props.types.find(a => a.id === b.type)}
          />
        ))}
      </div>
    </div>
  );
}

export default Books;
