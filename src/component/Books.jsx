import React, { useEffect, useState } from 'react';
import Book from './Book';
import { FallingLines } from 'react-loader-spinner';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(8);

    useEffect(() => {
        fetch('https://gutendex.com/books')
            .then((res) => res.json())
            .then((data) => setBooks(data.results));
    }, []);

 
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  
    const totalPages = Math.ceil(books.length / booksPerPage);

 
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

 
    const paginationButtons = [];
    for (let i = 1; i <= totalPages; i++) {
        paginationButtons.push(
            <button
                key={i}
                onClick={() => paginate(i)}
                className={`px-4 py-2 mx-1 rounded-lg ${i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
                {i}
            </button>
        );
    }

    return (
        <div>
            {
                currentBooks.length === 0 ? <div className='flex items-center justify-center h-screen'>
                      <FallingLines
                        color="blue"
                        width="100"
                         visible={true}
                         ariaLabel="falling-circles-loading"
                     />
                </div> : <div>
                     <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {currentBooks.map((book) => (
                    <Book key={book.id} book={book}></Book>
                ))}
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center mt-8">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 mr-2 bg-gray-200 rounded-lg ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
                >
                    Previous
                </button>

              {/* pagination button */}
                {paginationButtons}

                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 ml-2 bg-gray-200 rounded-lg ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
                >
                    Next
                </button>
            </div>
                </div>
           }
        </div>
    );
};

export default Books;
