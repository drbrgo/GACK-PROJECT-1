'use client';
import React from 'react';

export default function LoginForm() {
    
    const webUrl = "http://localhost:8080/"

    const handleSubmit = async(event) => {
        event.preventDefault();

        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        }

        //console.log(data);
        await fetch(webUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }).then((response) => response.json()).then(data => {
            console.log(data);
            //this sends the data to the backend, and then back to the front end to test that it works. 
        })
    }

    return (
        <div className= "flex justify-center">
            <form onSubmit = {handleSubmit}>
                <h1>Login</h1>
                <div class="container">
                <div class="row">
                    <div class="form-item col-4">
                        <label>Username</label>
                        <input type="text" autoComplete="off" id="username" />
                    </div>
                </div>
                </div>
                <div class="container">
                <div class="row">
                    <div class="form-item col-4">
                        <label>Password</label>
                        <input type="text" autoComplete="off" id="password" />
                    </div>
                </div>
         </div>

                <button type="submit">Login!</button>
            </form>
        </div>
    )


}