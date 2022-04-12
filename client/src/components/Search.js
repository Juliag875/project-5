import React from 'react'

function Search({searchItem, setSearchItem}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Product..."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}/>
    </div>
  )
}

export default Search