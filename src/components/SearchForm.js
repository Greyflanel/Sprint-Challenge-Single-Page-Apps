import React, { useState, useEffect } from "react";


export default function SearchForm(props) {
  
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
useEffect(() => {
const results = props.characters.filter(character => 
  character.name.toLowerCase().includes(searchTerm.toLowerCase()))
  setSearchResults(results)
}, [searchTerm, props.characters])

  const handleChange = event => {
    console.log(event.target.value)
    setSearchTerm(event.target.value);
  }

  return (
    <section className="search-form">
      <form>
      <input 
      type="text" 
      placeholder="Search" 
      value={searchTerm} 
      onChange={handleChange} 
      />
      <button type="submit">Search</button>
      </form>
{searchResults.map(results => <div key={results.name}>
 {results.name}
</div>)}
    </section>
  );
  }

