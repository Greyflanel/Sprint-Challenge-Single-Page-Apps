import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";


export default function CharacterList() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios
    .get(`https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon`)
    .then(response => setCharacters(response.data.results))
    .catch(error => console.log("Server Error", error))
    }
    getCharacters();
  }, [])
  
  
  
  return (
    <div>
      <SearchForm  characters={characters}/>
      
    </div>
  );
}
