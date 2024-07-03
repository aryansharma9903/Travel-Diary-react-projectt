import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id:'u1',
            name:'Aryan Sharma',
            image:'https://prodigits.co.uk/thumbs/wallpapers/p2ls/nature/26/9cde356812490450.jpg',
            places:'3'
        }
    ];
    return (
        <UsersList items={USERS}/>
    )
}

export default Users;