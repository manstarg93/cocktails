import React from 'react';
import { useGlobalContext } from '../context';
import { useAppContext } from '../hooks/useAppContext';

const SearchForm = () => {
  const { setSearchText } = useAppContext();
  return (
    <div className="search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="searchText">Search Your Favourite Cocktail</label>
          <input type="text" name="searchText" onChange={setSearchText} />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
