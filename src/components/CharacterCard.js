import React, { useEffect, useState } from "react";
import axios from 'axios';

const CharacterCard = (props) => {

const [charactersCard, setCharactersCard] = useState();
useEffect(() => {
  const character = props.match.params.id;

  axios
  .get(`https://rickandmortyapi.com/api/character/${character}`)
  .then(response => {
    setCharactersCard(response.data.results);
    console.log(response.data.results)

  })
  .catch(error => {
    console.error(error);
  });

},[CharacterCard])


// if (!character) {
//   return(<div>Loading Character info...</div>);
// }



const {name, gender, species, origin, status} = charactersCard
  return (
    <div>
      <div>
        <h3>{charactersCard.name}</h3>
      </div>
    </div>
  )
}
 export default CharacterCard;