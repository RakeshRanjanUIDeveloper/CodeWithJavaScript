import React, { useState } from 'react'

const Books = () => {
    const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
    { id: 3, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classic" },
    { id: 4, title: "1984", author: "George Orwell", genre: "Dystopian" },
    { id: 5, title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian" },
    { id: 6, title: "The Hunger Games", author: "Suzanne Collins", genre: "Young Adult" },
    { id: 7, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre:'Young Adult'}
    ];

    const [allBooks, setAllBooks] = useState(books);
    const [selectedGenre, setSelectedGenre] = useState('All Genre');
    const booksOption = ['All Genre', 'Classic', 'Dystopian', 'Young Adult'];

    const handleBookGenre = (genreName) => {
        setSelectedGenre(genreName);
       if(genreName === 'All Genre'){
        setAllBooks(books)
       }else{
        const filtered = books.filter((book) => book.genre === genreName);
        setAllBooks(filtered)
       }
    }

  return (
    <div className='books-wrapper'>
        <div className='book-buttons'>
            {
                booksOption.map((bookGenre) => (
                    <button className={`book-button ${selectedGenre === bookGenre ? 'active' : ''}`} key={bookGenre} onClick={() => handleBookGenre(bookGenre)}>{bookGenre}</button>
                ))
            }
        </div>
        <div className='book-details'>
           <ol>
                {
                allBooks.map((book) =>(
                   <li key={book.id}>Title - {book.title} Author - {book.author} Genre - {book.genre}</li> 
                ))
                }
           </ol>
        </div>
    </div>
  )
}

export default Books