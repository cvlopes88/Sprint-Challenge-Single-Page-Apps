import React, { useEffect, useState } from "react";
import axios from 'axios';

const CharacterCard = (props) => {

const [charactersCard, setCharactersCard] = useState([]);
useEffect(() => {
  const id = props.match.params.id;

  axios
  .get(`https://rickandmortyapi.com/api/character/${id}`)
  .then(response => {
    setCharactersCard(response.data.results);
    console.log(response.data.results)

  })
  .catch(error => {
    console.error(error);
  });

},[props.id])


// if (!character) {
//   return(<div>Loading Character info...</div>);
// }



const {name, gender, species, origin, status} = charactersCard
  return (
    <div>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  )
}
 export default CharacterCard;