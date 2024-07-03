import React from "react";
import './UsersList.css'

const UsersList = props => {
    if(props.items.length === 0){
        return <div> <h2>No users found!</h2></div>
    }
    return (
    <ul className="users-list">
        {props.items.maps(user => (
            <UserItem 
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
            />
        ))}
    </ul>    
    );
}

export default UsersList;