import React, { useContext } from 'react';
import { BookContext } from '../Context/BookContext';

const BookDetails = ({book}) =>{
    const {removeBook} = useContext(BookContext)

    return(
        <li key={book.id}>
            {book.title} - author: {book.author} 
            
            <button onClick={()=>removeBook(book.id)}>Remove</button>
        </li>
    )
}


export default BookDetails