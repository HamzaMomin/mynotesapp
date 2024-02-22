import React from "react";
import './addNote.css';

const Search = ({handleSearchNote}) => {

    return (

        <div className="search">
        <input onChange={(event)=>handleSearchNote(event.target.value)} type="text" placeholder="type to search..."></input>
    </div>

    )

}

export default Search;