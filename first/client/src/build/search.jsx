import React from 'react'

const Search = ({searchMethod, search}) => {
    return (
        <div>
            <input 
                className="form-control rounded-0 border-warning my-3 sticky-top" 
                placeholder="Search Product by Title" 
                type="text" 
                value={search} 
                onChange={searchMethod} 
            />
        </div>
    )
}

export default Search
