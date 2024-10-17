import React from 'react';
import Books from '../../component/Books';
import Search_Filter from '../../component/Search_Filter';

const Home = () => {
    return (
        <div>
            <Search_Filter/>
           <Books/>
        </div>
    );
};

export default Home;