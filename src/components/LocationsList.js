import React, { useEffect, useState } from "react";
import { Card } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from "react-router-dom";

const LocationsList = props => {
const [locations, setLocations] = useState([]);


useEffect(() => {

    const getLocation = () => {
     axios
     .get(`https://rickandmortyapi.com/api/location/`)
     .then(response => {
       setLocations(response.data.results);
       console.log(response.data)
   
     })
     .catch(error => {
       console.error(error);
     });
 
   }
     getLocation();
   }, []);

return (
    <div>
    {locations.map(loc => (
     <LocationData key={loc.id} locations={loc} />   

    ))}
    </div>
)


function LocationData({locations}) {
    return (
        <Link to={`/location/${locations.id}`}>
        <Card>
        <Card.Content header={locations.name} />    
        <Card.Content description={locations.type} />
        <Card.Content description={locations.dimension} />
        </Card>
        </Link>
    )
}























}
export default LocationsList;