import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(
    () => {
      axios
        .get(`https://cors-anywhere.herokuapp.com/https://rick-api.herokuapp.com/api/character`)
        .then(response => {
          setCharacters(response.data.results);
        })
        .catch(error => console.log(error));
    },
    [characters, setCharacters]
  );

  return (
    <section className="character-list">
      <CharCard>
        {characters.map(char => (
          <div key={char.name}>
            {char.name}
            <img src={char.image} alt={char.name} />
          </div>
        ))}
      </CharCard>
    </section>
  );
}

const CharCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5%;
`;
