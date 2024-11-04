import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Book from './Book'
import booksData from './bookData.js'
import './Book.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <h1>Book List</h1>
      <div className="book-list">
        {
        booksData.map(
          (book) => (
          <Book  key={book.id} book={book} />))
        }
      </div>
    </div>
  )
}

export default App
