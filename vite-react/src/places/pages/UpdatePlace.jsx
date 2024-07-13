import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/components/util/validators'
import './PlaceForm.css'
import { useForm } from "../../shared/hooks/form-hook";
import Card from "../../shared/components/UIElements/Card";
//importing dummy places
//as we will fecth these places based om the placeId from backend
//but for now we will do it for dummyplaces

//so basically what we'll do is
//get the place id from the url using useparams hook
// then we will find the place with that id from the array of dummyplaces using array.find()
//if there is no such id, we return no place found
//else we create a form in which user can update the details he wants to
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
        title: 'Empire ilding',
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


const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const [isLoading, setIsLoading] = useState(true)
    
    const[formState, InputHandler, setFormData] = useForm({
        title:{
            value: '',
            isValid: false
        },
        description:{
            value: '',
            isValid: false
        }
    }, false)

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    useEffect(() => {
        if(identifiedPlace) {
            setFormData({
                title:{
                    value: identifiedPlace.title,
                    isValid: true
                },
                description:{
                    value: identifiedPlace.description,
                    isValid: true
                }
            }, true)
        }
        setIsLoading(false);
    }, [setFormData, identifiedPlace])
    

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);// send this to the backend
    }
    
    if(!identifiedPlace){
        return (
            <div className="center">
                <Card>
                <h2>Could Not Find Place!</h2>
                </Card>
            </div>
        )
    }

    if(isLoading){
        return (
            <div className="center">
                <h2>loading....!</h2>
            </div>
        )
    }
    return(
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input 
                id="title" 
                element="input" 
                type="text" 
                label="Title" 
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter valid title."
                onInput={InputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input 
                id="description" 
                element="textarea"  
                label="Description" 
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter valid description (min 5 characters)."
                onInput={InputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>
                UPDATE PLACE
            </Button>
        </form>
    )
}

export default UpdatePlace;