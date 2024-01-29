
import React from "react";
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue,
}) {

    return (
      <div className="container-search">
       <input type="text" 
              placeholder="C cebolla"
              value={searchValue}
              onChange={(event)=> {
                setSearchValue(event.target.value);
              }}
              />
      </div>
    );
  }


export { TodoSearch } ;