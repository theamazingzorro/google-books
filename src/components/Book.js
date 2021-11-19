function Book(props) {
    return (
        <div data-testid={props.testid}>
            <div><img src={props.thumbnail} data-testid="thumbnail" /></div>
            <div><label>Title:</label> {props.title}</div>
            <div><label>Author:</label> {props.author}</div>
            <div><label>Description:</label> {props.description}</div>
            <div><label>Type:</label> {props.type}</div>
        </div>
    );
}

export default Book;