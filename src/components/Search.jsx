import React from 'react';
import SearchBar from './SearchBar';
// import SearchResults from './SearchResults';
// import { Grid } from '@material-ui/core';





const Search = ({ match }) => {
  
  let searchQuery = match.params.searchQuery;
      
  return (
    <SearchBar searchQuery={searchQuery} />
  );
};


export default Search;