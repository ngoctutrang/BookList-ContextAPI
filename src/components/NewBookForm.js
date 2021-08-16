import React, { useContext, useState } from 'react';
import { BookContext } from '../Context/BookContext';

const NewBookForm = () =>{
    const {addBook} = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const submitHanle = (e) =>{
        e.preventDefault();
        
        addBook(title, author)
        setTitle('')
        setAuthor('')
        
    }
    return (
        <form onSubmit={submitHanle}>
            <label>Add new book:</label>
            <input type="text" value = {title} onChange={e => setTitle(e.target.value)}/>
            <label>Author:</label>
            <input type="text" value={author} onChange={e => setAuthor(e.target.value)}/>
            <input type="submit" value="Add new book" />
        </form>
    )
}

export default NewBookForm