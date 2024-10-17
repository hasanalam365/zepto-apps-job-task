import React from 'react';
import { FaDownload, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
   
    return (
        <Link to={`/books/${book.id}`} className='shadow-lg p-4 rounded-xl'>
            <div className='flex flex-col justify-between'>
                <div>
                    {book.formats["image/jpeg"] && (
                        <img 
                            src={book.formats["image/jpeg"]} 
                            alt={book.title} 
                            className='w-full h-[200px] mb-4' 
                        />
                    )}
                </div>
                <div>
                    <div>
                         <h3 className='text-lg font-semibold'>
                          {book.title.length > 20 ? `${book.title.slice(0, 25)}...` : book.title}
                        </h3>
                        {book?.authors?.map((author, idx) => (
                            <h5 key={idx}>{author.name}</h5>
                        ))}
                    </div>
                    <div className='flex items-center justify-between mt-2'> 
                       
                        <p className='flex items-center gap-3'>
                            <FaDownload /> {book.download_count}
                        </p>
                        <FaRegHeart />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
