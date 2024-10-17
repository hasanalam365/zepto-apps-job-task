import React from 'react';
import { FaDownload, FaRegHeart } from 'react-icons/fa';
import { LuLanguages } from 'react-icons/lu';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const BookData=useLoaderData()
    


    return (
        <div className='flex flex-col md:flex-row lg:flex-row gap-3 md:gap-6 lg:gap-6 p-6'>
            <div className='w-full md:w-full lg:w-1/2'>
                 {BookData.formats["image/jpeg"] && (
                        <img 
                            src={BookData.formats["image/jpeg"]} 
                            alt={BookData.title} 
                            className='w-full h-[450px] mb-4 rounded-xl' 
                        />
                    )}
          </div>
            <div className=' space-y-1'>
                <h2 className='text-4xl font-bold'>{BookData.title}</h2>
                 {BookData?.authors?.map((author, idx) => (
                            <h5 key={idx}> <span className='font-medium'>Author: </span> {author.name} ({author.birth_year}- {author.death_year})</h5>
                 ))}
                <p><span className='font-medium'>Book Id:</span> {BookData.id}</p>
               
                <h4 className='font-medium pt-2'>Topic:</h4>
                 {
                    BookData.subjects.map((subject, idx) => <p key={idx}>
                        {subject}
                    </p> )
                }
                
                <div className='flex items-center gap-5 pt-2'>
                    <p className='flex items-center  gap-3'> <LuLanguages /> {BookData.languages == 'en'? 'English' : ''}</p>
                    |
                    <p className='flex items-center  gap-3'>  <FaDownload /> {BookData.download_count}</p>
                    |
                     <FaRegHeart />
                </div>
          </div>
        </div>
    );
};

export default BookDetails;