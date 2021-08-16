import React, { useContext } from 'react';
import { BookContext } from '../Context/BookContext';

const Navbar = () =>{
    const {books} = useContext(BookContext)

    return (
        <div className="navbar">
            <h1>Ninja reading book list</h1>
            <p>Currently have {books.length} books to get through...</p>
        </div>
    )
}

export default Navbar