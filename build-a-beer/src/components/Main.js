import { Component } from 'react';

const logIn = () => {
    console.log("Welcome Back Beer Enthusiast!");
}; 
    
const register = () => {
    console.log("Create An Account To Become A Beer Enthusiast!");
};
 

export default class Main extends Component {
    render() {
        return (
            <header>
                <h1>Hello Beer Enthusiast!</h1>
                <h3>Log-In</h3> 
                <button onClick={logIn}>Log-In</button>            
            </header>
        );

    }


    
}
 
// log in from here?  register page (admin) is here