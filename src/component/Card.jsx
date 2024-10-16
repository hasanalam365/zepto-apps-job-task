import React from 'react';

const Card = ({ book }) => {
    
     console.log(book.formats.image)
    return (
        <div className='shadow-lg p-4 rounded-xl'>
            <div>
                <div>
                    {
                        book.formats["image/jpeg"] && (
                             <img src={book.formats["image/jpeg"]} alt={book.title} className='w-full h-[200px]'/>
                        )
                   }
                </div>
                <div>
                    <div>
                        <h3 className='text-lg font-semibold'>{book.title}</h3>
                        {
                            book?.authors?.map((author,idx)=>  <h5 key={idx}>{author.name}</h5>) 
                        }
                      
</div>
                </div>
            </div>
        </div>
    );
};

export default Card;