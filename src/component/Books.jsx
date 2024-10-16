import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {

    const [books,setBooks]=useState([])

    useEffect(() => {
       fetch('https://gutendex.com/books')
       .then(res=>res.json())
       .then(data=>setBooks(data.results))
   },[])

   
    
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {
                books?.map(book=> <Book key={book.id} book={book}></Book> )
          }
        </div>
    );
};

export default Books;