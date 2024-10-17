import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const BookData=useLoaderData()
    
    return (
        <div>
            <li>{BookData.id}</li>
        </div>
    );
};

export default BookDetails;