import Book from "./Book.js";
import PropTypes from "prop-types";

const BookShelf = ( { books, id, category, onUpdateCategory } ) => {
    const handleUpdate = (book) => {
        onUpdateCategory(book.category);
    };

    return  <section flex flex-row py-15>
        <h2>{category}</h2>
{books.filter((b) => (b.category === books.category)) && books.map((book) => 
<li key={id}><Book title={book.title} author={book.author} category={book.category} onUpdateCategory={handleUpdate} /></li>
)}
</section>
}

BookShelf.propTypes = {
books: PropTypes.array.isRequired,
id: PropTypes.string.isRequired,
category: PropTypes.string.isRequired,
onUpdateCategory: PropTypes.func.isRequired,
};

export default BookShelf;



