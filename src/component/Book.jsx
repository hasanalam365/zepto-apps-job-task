import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaDownload, FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Book = ({ book }) => {

    const [isWishlist, setIsWishlist] = useState(false)
    const [wishlists,setWishlists]=useState([])

    useEffect(() => {
        const storedWishlist=JSON.parse(localStorage.getItem('bookLists')) || []
        const isBookWishlist=storedWishlist.some(wishBook=>wishBook.id === book.id)
        setIsWishlist(isBookWishlist)
    },[book.id,wishlists])


    const handleAddWishlist = (book) => {

        const isBookCheck= wishlists.some(wish=>wish.id===book.id)

        if (!isBookCheck) {
            const updatedWishlist=[...wishlists,book]
            setWishlists(updatedWishlist)
            localStorage.setItem('bookLists',JSON.stringify(updatedWishlist))
        }

       alert('Added Wishlist')
        
        
     
        
    }
    
    const handleRemoveWishlist = (id) => {
        const isCheckWishlists=JSON.parse(localStorage.getItem('bookLists')) ||[]
        const updatedWishlists= isCheckWishlists.filter(check=>check.id!== id)
        setWishlists(updatedWishlists)
        localStorage.setItem('bookLists',JSON.stringify(updatedWishlists))
        alert('Removed Succesfully')
    }


    return ( 
        <div data-aos="fade-up" data-aos-delay="50" className='shadow-lg p-4 rounded-xl'>
            <div className='flex flex-col justify-between'>
                <div>
                    {book.formats["image/jpeg"] && (
                        <img 
                            src={book.formats["image/jpeg"]} 
                            alt={book.title} 
                            className='w-full h-[200px] mb-4'
                            loading='lazy'
                        />
                    )}
                </div>
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
                    {isWishlist ? (
                        <FaHeart className="text-red-600" onClick={()=>handleRemoveWishlist(book.id)}/>
                    ) : (
                        <FaRegHeart  onClick={()=>handleAddWishlist(book)}/>
                    )}
                </div>
                <Link to={`/books/${book.id}`} >
                   <button className='bg-orange-600 text-white p-2 rounded-lg mt-2'> See details</button>
                </Link>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        formats: PropTypes.object.isRequired,
        authors: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired
            })
        ).isRequired,
        download_count: PropTypes.number
    }).isRequired
};

export default Book;
