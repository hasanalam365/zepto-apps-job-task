import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Search_Filter = ({ setSearch, setCategory }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSearch = () => {
        setSearch(searchTerm);
        setCategory(selectedCategory);
    };

    return (
       <div className="flex justify-center items-center bg-gray-100 py-4  z-10">
            <div className="flex items-center p-2 bg-white rounded-lg max-w-md w-full">
                <input 
                    onChange={e => setSearchTerm(e.target.value)}
                    type="text" 
                    placeholder="Search by title..." 
                    className="search-input p-3 w-full rounded-lg outline-none border border-gray-300 focus:border-blue-400"
                />
                <button 
                    onClick={handleSearch}
                    className="search-button ml-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
                >
                    Search
                </button>
            </div>
            
            {/* Dropdown Menu */}
            <div className="ml-4 relative">
                <select 
                    onChange={e => setSelectedCategory(e.target.value)}
                    className=" py-3 px-4 pr-10 rounded-lg border border-gray-300 bg-white focus:border-blue-400 focus:outline-none appearance-none"
                    name="category" 
                    id="category"
                >
                    <option value="">All</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Drama">Drama</option>
                    <option value="Horror tales">Horror tales</option>
                    <option value="Science fiction">Science fiction</option>
                    <option value="Gothic fiction">Gothic fiction</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <IoIosArrowDown />
                </div>
            </div>
        </div>
    );
};

export default Search_Filter;
