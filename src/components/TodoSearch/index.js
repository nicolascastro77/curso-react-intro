
import React from "react";
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue,
}) {

    return (
      <div className="container-search">
       <input type="text" 
              placeholder="Filtrar TODOS"
              value={searchValue}
              onChange={(event)=> {
                setSearchValue(event.target.value);
              }}
              />
      </div>
    );
  }


export { TodoSearch } ;