'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';



export default function RegisterDummyForm2() {

    const webUrl = "http://localhost:8080";


//manage input values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    //manage error message 
    const [errorMessage, setErrorMessage] = useState('');

    //
    const router = useRouter();


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
            verifyPassword: event.target.verifyPassword.value
        }

        console.log(data);

       try{
        const response = await fetch(webUrl + "/registerdummy", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(data),
        })
        // .then((response) => response.json()).then(data => {
        //     console.log(data);
        //})
        const responseData = await response.json();

        console.log(responseData);

        if (response.status == 400) {
            // checking if response status is not OK (as in a 4-- or 5-- response status code)
            throw new Error(`Your passwords don't match.`);
          }

        if (response.status == 409) {
            // checking if response status is not OK (as in a 4-- or 5-- response status code)
            throw new Error(`Username already taken.`);
          }
          
        if (response.ok) {
            //log response body and redirect to profile page
        console.log(response.body);
        setCookie('username', data.username, {
            httpOnly: false,
            path: '/',
          });
        router.push('/user/profiledummy');
        }
        
        setUsername('');
        setPassword('');
        setVerifyPassword('');
        setErrorMessage('');


    } catch (error) {
        // checking if response status is not OK (as in a 4-- or 5-- response status code)--will need to update for username taken error AND pw no match error
        //throw new Error(`Make sure your passwords match and maybe try a different username`);
        setErrorMessage(error.message);
        console.error('Registration Error:', error);
      }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>create new dummy profile</h1>
                {/* error message only displayes if present */}
                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                <div>
                    <h1>Username</h1>
                    
                    <input
                         type="text"
                         autoComplete="off"
                         id="username"
                         value={username}
                         onChange={(event) => setUsername(event.target.value)}
                        required minLength={2}
                    />
                </div>
                <div>
                    <h1>Password</h1>
                    <input
                        type="password"
                        autoComplete="off"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required minLength={2}
                    />
                </div>
                <div>
                    <h1>Verify Password</h1>
                    <input
                        type="password"
                        autoComplete="off"
                        id="verifyPassword"
                        value={verifyPassword}
                        onChange={(event) => setVerifyPassword(event.target.value)}
                        required minLength={2}
                    />
                </div>


            <button type="submit">Dummy</button>
      </form>
    </div>

                
            
    )
}