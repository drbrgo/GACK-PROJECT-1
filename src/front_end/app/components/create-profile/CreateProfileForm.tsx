'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

export default function CreateProfileForm() {

    const webUrl: string = "http://localhost:8080"

    //manage input values
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');

    //manage error message 
    const [errorMessage, setErrorMessage] = useState('');

    //manage redirection
    const router = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault(); //prevents the form from autosubmitting

        //object is being sent to the backend, inputs that have been filled in
        const data = {
            name: String(event.target.name.value),
            password: String(event.target.password.value),
            verifyPassword: String(event.target.verifyPassword.value),
            birthdate: Number(event.target.birthdate.value),
            phoneNumber: Number(event.target.phoneNumber.value),
            emailAddress: String(event.target.emailAddress.value)
        }

        console.log(data);

        try{
        const response = await fetch(webUrl + "/createProfile/createNewProfile", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
         })
        //.then((response) => response.json()).then(data => {
        //     console.log(data);
        // })
//POST request working. server is receiving the object entered in form.

        const responseData = await response.json();

        console.log(responseData);

        if (response.status == 400) {
            // checking if response status is not OK (as in a 400 response status code)
            throw new Error(`Your passwords don't match.`);
        }

        if (response.status == 409) {
            // checking if response status is CONFLIFT (as in a 409 response status code)
            throw new Error(`Username already taken.`);
        }
        
        if (response.ok) {
            //log response body and redirect to profile page
        console.log(response.body);
        setCookie('username', data.name, {
            httpOnly: false,
            path: '/',
        });
        router.push('/user/profiledummy');
        }

        setName('');
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
//action ="user/profile"

    return (
        <div>
            <form onSubmit={handleSubmit} >            
            <h3>Create An Account To Become A Beer Enthusiast!</h3>
                {/* error message only displayes if present */}
                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                <div>
                    <h5>Username: </h5>
                    
                    <input
                         type="text"
                         autoComplete="off"
                         id="name"
                         value={name}
                         onChange={(event) => setName(event.target.value)}
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

                <button type="submit" >Submit</button>          
            </form> 

            <p> Already Registered?<br /><a href="/">Login</a>
            </p>
        </div>
    )
     //login link now works 
}
