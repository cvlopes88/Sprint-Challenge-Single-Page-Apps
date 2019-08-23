import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

 const CharacterList = props => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {

   const getCharacters = () => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      setCharacters(response.data.results);
      console.log(response.data.results);
  
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
  const { name, gender, species, origin, status} = characters;
  return (
    <Link to={`/charater/${characters.id}`}>
    <div className="cardList" >
      <img src={characters.image}></img>
      <div className="card">
      Name:<h2>{characters.name}</h2>
      </div>
      <div className="card">
      Gender:<h3>{characters.gender}</h3>
      </div>
      <div className="card">
      species:<h3> {characters.species}</h3>
      </div>
      <div className="card">
      Status:<h3>{characters.status}</h3>
      </div>
      

      
    </div>
    </Link>
  )
  
}
 }
export default CharacterList;