import React from "react";
//going to form elements to creart the Input tag;
import './NewPlace.css'
import Input from "../../shared/components/FormElements/Input";

const NewPlace = () => {
return (
<form action="" className="place-form">
    <Input element="input" type="text" label="Title" validators={[]} onChange={changeHandler}/>
</form>
    )
}

export default NewPlace;