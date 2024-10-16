import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {

    const [books,setBooks]=useState([])

    useEffect(() => {
       fetch('https://gutendex.com/books')
       .then(res=>res.json())
       .then(data=>setBooks(data.results))
   },[])

   
    
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {
                books?.map(book=> <Card key={book.id} book={book}></Card> )
          }
        </div>
    );
};

export default Cards;