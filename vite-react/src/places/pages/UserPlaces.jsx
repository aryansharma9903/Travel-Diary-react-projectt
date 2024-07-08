import React from "react";

// we will return the list of places for that user
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

//so useparams are used to exrtract the userid of the user from the url and then
//if i havr an array of objects, so the object with that particular array can be displayed on the 
//webpage rather than displaying all the array objects


const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'famouss',
        imageUrl: 'https://www.tripsavvy.com/thmb/sBI2W7YNV4vRSVdbRVfASLH3F6I=/2617x3874/filters:fill(auto,1)/5891665274_cc93622eb7_o-56a3ff3b5f9b58b7d0d4df13.jpg',
        address: '20 West 34th Street, New York City, NY 10001',
        location: {
            lat: 40.74837,
            lng: -73.98464
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'famouss',
        imageUrl: 'https://www.tripsavvy.com/thmb/sBI2W7YNV4vRSVdbRVfASLH3F6I=/2617x3874/filters:fill(auto,1)/5891665274_cc93622eb7_o-56a3ff3b5f9b58b7d0d4df13.jpg',
        address: '20 West 34th Street, New York City, NY 10001',
        location: {
            lat: 40.74837,
            lng: -73.98464
        },
        creator: 'u2'
    }
]
  
const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;