const Book = ({ title, author, price }) => {
    const handleClick = () => {
        console.log(`Book's author is ${author}`);
    };

    return (
        <div>
            <h3>{title}</h3>
            <p>By {author}</p>
            <p>Price: ${price}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

const BestSellers = () => {
    return (
        <div>
            {books.map((book, index) => (
                <Book key={index} title={book.title} author={book.author} price={book.price} />
            ))}
        </div>
    );
};

const books = [
    {
        title: "The Martian",
        author: "Andy Weir",
        price: 12.99,
    },
    {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        price: 15.99,
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        price: 10.99,
    },
];

export default BestSellers;
