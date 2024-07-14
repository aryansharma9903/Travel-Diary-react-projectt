import React, { useState, useContext } from "react";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_EMAIL, VALIDATOR_MIN, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/components/util/validators";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import './Auth.css';
import Card from "../../shared/components/UIElements/Card";
import { AuthContext } from "../../shared/context/auth-context";

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);

    const [formState, InputHandler, setFormData] = useForm(
    {
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
        if(!isLoginMode){
            setFormData(
                {
                ...formState.inputs,
                name: undefined
                },
            formState.inputs.email.isValid && formState.inputs.password.isValid);}
        else{
            setFormData({
                ...formState.inputs,
                name:{
                    value: '',
                    isValid: false
                }
            }, 
            false
        );
    }
    setIsLoginMode(prevMode => !prevMode);
}

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
        auth.login();
    }
 return(
    <Card className="authentication">
        <h2>Login</h2>
    <form className="place-form" onSubmit={authSubmitHandler}>
        {!isLoginMode && <Input 
            id="name" 
            element="input"
            type="name"  
            label="Name" 
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={InputHandler}
            //initialValue={formState.inputs.description.value}
            //initialValid={formState.inputs.description.isValid}
        />}

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
                {isLoginMode ? 'LOGIN' : 'SIGNUP'}
            </Button>
        </form>
        <Button onClick={switchModeHandler}>
                Switch to {isLoginMode ? 'SIGNUP' : "LOGIN"}
            </Button>
        </Card>
    );   
};

export default Auth;