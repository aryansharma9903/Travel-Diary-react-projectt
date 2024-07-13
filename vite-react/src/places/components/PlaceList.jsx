import React from "react";
import './PlaceList.css'
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";

const PlaceList = props => {
    if(props.items.length == 0){
        return <div className="place-list center">
            <Card>
                <h2>No Places Found. Maybe create one?</h2>
                <Button to='/places/new'>Add new place</Button>
            </Card>
        </div>
    }

    return <ul className="place-list">
        {props.items.map(place => <PlaceItem 
        key={place.id}
        id={place.id}
        image={place.imageUrl}
        title={place.title}
        description={place.description}
        address={place.address}
        creatorid={place.creator}
        coordinates={place.location}    
        />)}
    </ul>
};

export default PlaceList;