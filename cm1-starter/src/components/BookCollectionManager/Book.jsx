import React from 'react'

function Book({ title, author, year, children, index, onDelete }) {
    const handleDeleteBook = () => {
        onDelete(index);
        console.log(index)
    }
    return (
        <div className="container bg-blue-100 flex mx-auto border-4 border-blue-300
        p-4 rounded-sm">
            <li className="container items-center justify-between relative 
            flex mx-auto p-4">
                <span className="flex-grow p-4">{title} by {author}</span>
                <span className="p-4 text-right"> Year published: {year} </span>
                <span className="p-4">
                    <button className="rounded-full bg-red-500 text-white-500 
                    hover:underline p-4" onClick={handleDeleteBook}>
                        Delete
                    </button>
                </span>
            </li>
        </div>
    )
}

export default Book

