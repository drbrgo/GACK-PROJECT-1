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
    const [birthdate, setBirthdate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');

    //manage error message 
    const [errorMessage, setErrorMessage] = useState('');

    //manage redirection
    const router = useRouter();


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            username: String(event.target.username.value),
            password: String(event.target.password.value),
            verifyPassword: String(event.target.verifyPassword.value),
            birthdate: Number(event.target.birthdate.value),
            phoneNumber: Number(event.target.phoneNumber.value),
            emailAddress: String(event.target.emailAddress.value)
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
        setBirthdate('');
        setPhoneNumber('');
        setEmailAddress('');
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
                    <h5>Username: </h5>
                    
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
                    <h5>Password: </h5>
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
                    <h5>Verify Password: </h5>
                    <input
                        type="password"
                        autoComplete="off"
                        id="verifyPassword"
                        value={verifyPassword}
                        onChange={(event) => setVerifyPassword(event.target.value)}
                        required minLength={2}
                    />
                </div>
                <div>
                <h5>Birthdate: </h5>
                    <input
                        type="date"
                        autoComplete="off"
                        id="birthdate"
                        value={birthdate}
                        onChange={(event) => setBirthdate(event.target.value)}
                        required minLength={2}
                    />
                </div>
                <div>
                <h5>Phone Number: </h5>
                    <input
                        type="number"
                        autoComplete="off"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        required minLength={10} maxLength={10}                    />
                </div>
                <div>
                <h5>Email Address: </h5>
                    <input
                        type="email"
                        autoComplete="off"
                        id="emailAddress"
                        value={emailAddress}
                        onChange={(event) => setEmailAddress(event.target.value)}
                        
                    />
                </div>

                


            <button type="submit">Dummy</button>
      </form>
    </div>

                
            
    )
}