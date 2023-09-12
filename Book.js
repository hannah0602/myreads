import PropTypes from "prop-types";
import { useState } from 'react';

const Book = ({ book, category, onUpdateCategory, onSelect }) => {
const[menu, setMenu] = useState(false);
const[selectedCategory, setSelectedCategory] = useState({category});

const showMenu = () => {
    setMenu(true);
}

function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    fetch('/some-api', { method: form.method, body: formData });
    onUpdateCategory(selectedCategory);
    onSelect(selectedCategory);
}

return <div className="flex flex-col px-10 w-30 h-56">
   <p>{book.title}</p>
   <p>{book.author}</p>
<button className="rounded-full w-16 hh-16 bg-blue-700 shadow-sm" onClick={showMenu}>
</button>
{menu === 'true'&& <form w-20 h-14 bg-gray-400 rounded method="post" onSubmit={handleSubmit}>
        <label>
            Move on to...
            <select
            multiple={true}
            value={selectedCategory}
            defaultValue={category}
            onChange={e => {
                const options = [...e.target.selectedOptions];
                const values = options.map(option => option.value);
                setSelectedCategory(values);
              }}
            >
          <option value="Currently Reading">Currently Reading</option>
          <option value="Want To Read">Want To Read</option>
          <option value="Read">Read</option>
          <option value="None">None</option>
            </select>
        </label>
    </form>}
</div>
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
    onUpdateCategory: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    };

export default Book;