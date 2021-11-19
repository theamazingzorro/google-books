function Book() {
    const title = "some title";
    const author = "some author";
    const description = "some description";
    const thumbnail = "https://th.bing.com/th/id/OIP.28sgzedFu7LhRiGkAMUBBgHaEo?w=298&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7";
    const type = "book";

    return (
        <div>
            <div><img src={thumbnail} data-testid="thumbnail" /></div>
            <div><label>Title:</label> {title}</div>
            <div><label>Author:</label> {author}</div>
            <div><label>Description:</label> {description}</div>
            <div><label>Type:</label> {type}</div>
        </div>
    );
}

export default Book;