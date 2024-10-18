import React from 'react'
import Book from './Book'

function RenderingLists() {
    const bookList = [
        'to kill a mockingbird',
        '1984',
        'the great gatsby'
    ]

    const books = [
        { 
            title: 'to kill a mockingbird',
            author: 'Harper Lee',
            pages: 280
        },
        {
            title: '1984',
            author: 'George Orwell',
            pages: 328
        },
        {
            title: 'the great gatsby',
            author: 'F. Scott Fitzgerald',
            pages: 256
        }
    ]

    return (
        <div>
            {bookList.map(book => { 
               return <li key={book}>{book}</li>
            })}

            {books.map(book => {
                return (
                    <Book book={book} />
                )
            })}

        </div>
    )
}

export default RenderingLists