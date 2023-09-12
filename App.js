import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';


const books = [
  {
    id: 1,
    title: "To kill a mockingbird",
    author: "Harper Lee",
    category: "Currently Reading",
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Currently Reading",
  },
  {
    id: 3,
    title: "1776",
    author: "David McCullough",
    category: "Want To Read",
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Want To Read",
  },
  {
    id: 5,
    title: "4 Hour Week",
    author: "Tim Ferris",
    category: "Read",
  },
  {
    id: 6,
    title: "12 Rules For Life",
    author: "Jordan Peterson",
    category: "Read",
  },
  {
    id: 7,
    title: "1984",
    author: "George Orwell",
    category: "None",
  },
  {
    id: 8,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "None",
  },
];


function App() {
  const [shelf, setShelf] = useState([]);

  const updateBookShelf = (book) => {
    if (book.category === books.category) {
    setShelf([...books, book]);
  };
   if (book.category !== books.category){
    setShelf(books.filter((b) => b.id !== book.id));
  };
};

const selectBooks = (book) => {
  setShelf([...books, book]);
};

  return (
    <div className="App">
      <header className="bg-green-600 w-full">
        <h1 className="text-white">MyReads</h1>
      </header>
      <Link to="/search">Search</Link>
    <h2>Selected Books in Search Page</h2>
    <BookShelf shelf={shelf} onSelect={selectBooks} />

    {books.filter((book) => (book.category="Currently Reading")) &&  
    <BookShelf category="Currently Reading" shelf={shelf} onUpdateCategory={updateBookShelf} />}

      {books.filter((book) => (book.category="Want to Read")) &&  
      <BookShelf category="Want to Read" shelf={shelf} onUpdateCategory={updateBookShelf} />}

      {books.filter((book) => (book.category="Read")) &&  
      <BookShelf category="Read" shelf={shelf} onUpdateCategory={updateBookShelf} />}
    </div>
  );
}

export default App;
