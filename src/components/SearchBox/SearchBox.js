import React from 'react';
import './SearchBoxstyles.css';

export const SearchBox = ({placeholder, handChange}) => (
  <input 
  className= "search"
  type = "search" 
  placeholder= {placeholder} 
  onChange={ handChange }
    
    />
);