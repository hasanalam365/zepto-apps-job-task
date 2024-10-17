import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const BookData=useLoaderData()
    
    console.log(BookData)

    return (
        <div className='flex gap-8 mt-8'>
            <div className='w-1/2'>
                 {BookData.formats["image/jpeg"] && (
                        <img 
                            src={BookData.formats["image/jpeg"]} 
                            alt={BookData.title} 
                            className='w-full h-[500px] mb-4' 
                        />
                    )}
          </div>
            <div>
                <h2 className='text-4xl font-bold'>{BookData.title}</h2>
                 {BookData?.authors?.map((author, idx) => (
                            <h5 key={idx}> <span className='font-medium'>Author: </span> {author.name} ({author.birth_year}- {author.death_year})</h5>
                 ))}
                <p><span className='font-medium'>Id:</span> {BookData.id}</p>
                {
                    BookData.subjects.map((subject, idx) => <p key={idx}>
                        {subject}
                    </p> )
                }
          </div>
        </div>
    );
};

export default BookDetails;