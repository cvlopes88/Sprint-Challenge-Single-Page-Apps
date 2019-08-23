import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Card, Icon } from 'semantic-ui-react';





const EpisodeList = props => {
const [episodes, setEpisodes] = useState([])


useEffect(() => {

    const getEpisodes = () => {
     axios
     .get(`https://rickandmortyapi.com/api/episode/`)
     .then(response => {
       setEpisodes(response.data.results);
       console.log(response.data.results)
   
     })
     .catch(error => {
       console.error(error);
     });
 
   }
     getEpisodes();
   }, []);

return (
    <div>
    {episodes.map(epi => (
        <EpisodeData key={epi.id} episodes={epi} />
    ))}

    </div>
)

function EpisodeData({episodes}) {

    return (
      <Link to={`/episode/${episodes.id}`}>
    <Card>
      <Card.Content header={episodes.name} />
      <Card.Content description={episodes.air_date} />
      <Card.Content description={episodes.episode} />
      </Card>
    </Link>
    )
}





}

export default EpisodeList;