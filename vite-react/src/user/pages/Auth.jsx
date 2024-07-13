import React, { useState } from "react";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_EMAIL, VALIDATOR_MIN, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/components/util/validators";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import './Auth.css';
import Card from "../../shared/components/UIElements/Card";

const Auth = () => {
    const [switchMode, setSwitchMode] = useState(false)

    const switchToSignUp = () => {
        setSwitchMode(true);
    }
    const [formState, InputHandler] = useForm({
        // name:{
        //     value:'',
        //     isValid: false
        // },
        email:{
            value:'',
            isValid: false
        },
        password:{
            value:'',
            isValid: false
        }
    }, false)

    const switchModeHandler = () => {

    }

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    }
 return(
    <Card className="authentication">
        <h2>Login</h2>
    <form className="place-form" onSubmit={authSubmitHandler}>
            <Input 
                id="email" 
                element="input"
                type="email"  
                label="Email" 
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                errorText="Please enter valid email."
                onInput={InputHandler}
                //initialValue={formState.inputs.description.value}
                //initialValid={formState.inputs.description.isValid}
            />
            <Input 
                id="password"
                type="password" 
                element="input"  
                label="Password" 
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter valid password, at least 6 characters."
                onInput={InputHandler}
                //initialValue={formState.inputs.description.value}
                //initialValid={formState.inputs.description.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>
                LOGIN
            </Button>
        </form>
        <p>New User?</p>
        <Button inverse type="submit" onClick={switchModeHandler} disabled={!formState.isValid}>
                Sign Up
            </Button>
        </Card>
    );   
};

export default Auth;