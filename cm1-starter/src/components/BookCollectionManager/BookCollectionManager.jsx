import React, { useState } from "react";
import Book from './Book.jsx'

function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "", year: "" });
  const [errors, setErrors] = useState({ title: "", author: "", year: "" });

  // Handle input change for fields
  function handleInputChange(event) {
    const { name, value } = event.target;
    setErrors((prevErrors)=> {return {...prevErrors, [name]:"" } });
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  }

  // Add a new book to the list
  function addBook() {
    if (validateInputs()) {
      setBooks((b) => [...b, newBook]);
      setNewBook({ title: "", author: "", year: "" }); // Clear the input fields
    }
  }

  // Delete a book from the list
  function deleteBook(index) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  }

  const validateInputs = () => {
    let isValid = true;
    let newErrors = { title: "", author: "", year: "" };

    if (newBook.title.trim() === '') {
      newErrors.title = "Title cannot be empty.";
      isValid = false;
    }
    if (newBook.author.trim() === '') {
      newErrors.author = "Author cannot be empty.";
      isValid = false;
    }
    const year = parseInt(newBook.year, 10);
    const currentYear = new Date().getFullYear();
    if (isNaN(year) || year < 1000 || year > currentYear) {
      newErrors.year = "Please enter a valid year.";
      isValid = false;
    }

    setErrors(()=> newErrors);
    return isValid;
  };


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Book Collection Manager</h1>
      <div className="max-w-4xl mx-auto flex flex-wrap gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-300">
        <span className="flex-1 text-center border border-gray-200 p-4 rounded-md bg-gray-50">
          <p className="font-semibold mb-2">Title</p>
          <input
            className="w-full border border-gray-300 rounded p-2"
            type="text"
            placeholder="Enter book title..."
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <p className="w-full text-red-500 text-sm h-4">{errors.title} </p>
        </span>
        <span className="flex-1 text-center border border-gray-200 p-4 rounded-md bg-gray-50">
          <p className="font-semibold mb-2">Author</p>
          <input
            className="w-full border border-gray-300 rounded p-2"
            type="text"
            placeholder="Enter author name..."
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <p className="w-full text-red-500 text-sm h-4">{errors.author} </p>
        </span>
        <span className="flex-1 text-center border border-gray-200 p-4 rounded-md bg-gray-50">
          <p className="font-semibold mb-2">Publish Year</p>
          <input
            className="w-full border border-gray-300 rounded p-2"
            type="number"
            placeholder="Enter publish year"
            name="year"
            value={newBook.year}
            onChange={handleInputChange}
          />
          <p className="w-full text-red-500 text-sm h-4">{errors.year} </p>
        </span>

        <button className="w-full bg-green-500 text-white py-2 rounded-md mt-4 hover:bg-green-600 transition" onClick={addBook}>
          Add Book
        </button>
      </div>
      <ol className="max-w-4xl mx-auto mt-6 border-4 border-blue-600 rounded-md">
        {books.map((book, index) => (
          <Book key={index} {...book} index={index} onDelete={deleteBook}>
          </Book>
        ))}
      </ol>
    </div>

  );
}

export default BookCollectionManager;