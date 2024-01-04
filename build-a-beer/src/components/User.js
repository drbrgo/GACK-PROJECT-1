import { Component } from 'react';

const logIn = () => {
    console.log("Welcome Back Beer Enthusiast!");
}; 
    
const register = () => {
    console.log("Create An Account To Become A Beer Enthusiast!");
};
 

export default class User extends Component {
    render() {
        return (
            <header>
                <h1>Hello Beer Enthusiast!</h1>
                <h3>Log-In</h3> 
                <button onClick={logIn}>Log-In</button>
                <h3>Register</h3>   
                <button onClick={register}>Register</button>             
            </header>
        );

    }


    
}
 
//from here 2 buttons will take you to log in to the user profile or register page (admin) if either are selected