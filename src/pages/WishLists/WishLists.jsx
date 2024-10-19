import React, { useEffect, useState } from 'react';
import { FaDownload, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WishLists = () => {

    const [wishBooks,setWishBooks]=useState([])

    useEffect(() => {
      

        const books = localStorage.getItem('bookLists')
      
        if (books) {
              setWishBooks(JSON.parse(books))
        }

    },[])

    const handleRemoveWish = (id) => {
    
        const updatedWishBooks = wishBooks.filter(book => book.id !== id)
        

       setWishBooks(updatedWishBooks)
        localStorage.setItem('bookLists', JSON.stringify(updatedWishBooks))
        alert('Removed Successfully')
}


    return (
       <div>
            {
                wishBooks.length === 0 ? <p className='flex items-center justify-center py-[10%]'>Wishlists is Empty!! </p>
                    :
                      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
                {
                    wishBooks.map(wishBook => 
                         <div key={wishBook.id} className='flex flex-col justify-between shadow-lg p-4 rounded-xl'>
                <div>
                    {wishBook.formats["image/jpeg"] && (
                        <img 
                            src={wishBook.formats["image/jpeg"]} 
                            alt={wishBook.title} 
                            className='w-full h-[200px] mb-4'
                            loading='lazy'
                        />
                    )}
                </div>
                <div>
                    <h3 className='text-lg font-semibold'>
                        {wishBook.title.length > 20 ? `${wishBook.title.slice(0, 25)}...` : wishBook.title}
                    </h3>
                    {wishBook?.authors?.map((author, idx) => (
                        <h5 key={idx}>{author.name}</h5>
                    ))}
                </div>
                <div className='flex items-center justify-between mt-2'> 
                    <p className='flex items-center gap-3'>
                        <FaDownload /> {wishBook.download_count}
                    </p>
                              
                                <FaHeart onClick={()=>handleRemoveWish(wishBook.id)} className='text-red-600'/>
                </div>
                <Link to={`/books/${wishBook.id}`} >
                   <button className='bg-orange-600 text-white p-2 rounded-lg mt-2'> See details</button>
                </Link>
            </div>
                    )
           }
        </div>
          }
        </div>
    );
};

export default WishLists;