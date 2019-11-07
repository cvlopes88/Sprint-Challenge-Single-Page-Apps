import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Card, Icon } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import CharacterCard from "./CharacterCard";
 const CharacterList = props => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {

   const getCharacters = () => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      setCharacters(response.data.results);
      console.log(response.data)
  
    })
    .catch(error => {
      console.error(error);
    });

  }
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    getCharacters();
  }, []);

  return (
    <section className="character-list grid-view">
      
      {characters.map(person => (
        <CharacterData key={person.id} characters={person} />
        
      ))}

    

    </section>
    
  );
  


function CharacterData({characters}) {
  
  return (
    <Link to={`/charater/${characters.id}`}>
   
     <Card image={characters.image}
           header={characters.name}
           description={characters.gender} 
           extra={characters.species}
           />


    
    </Link>
  )
  
}
 }
export default CharacterList;