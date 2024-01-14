'use client'

import React from "react";

export default function CreateProfileForm() {

    const webUrl: string = "http://localhost:8080"

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        //object is being sent to the backend, inputs that have been filled in
        const data = { 
            name: String(event.target.userName.value),
            password: String(event.target.password.value),
            birthdate: Number(event.target.birthdate.value),
            phoneNumber: Number(event.target.phoneNumber.value),
            emailAddress: String(event.target.emailAddress.value),
        }
        await fetch(webUrl + "/createProfile/createNewProfile", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }).then((response) => response.json()).then(data => {
            console.log(data);
        })
//POST request working. server is receiving the object entered in form.

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h3>Create An Account To Become A Beer Enthusiast!</h3>
            <div>
                <h5>Name: </h5>
                <input type="text" autoComplete="off" id="name" required minLength={3} maxLength={25}/>
                </div>

                <div>
                <h5>Password: </h5>
                <input type="text" autoComplete="off" id="password" required minLength={3} maxLength={25}/> 
                </div>

                <div>
                <h5>Birthdate: </h5>
                <input type="text" autoComplete="off" id="birthdate" required minLength={8} maxLength={8}/>
                </div> 

                <div>
                <h5>PhoneNumber: </h5>
                <input type="text" autoComplete="off" id="phoneNumber" required minLength={10} maxLength={10}/>
                </div>                   

                <div>
                <h5>Email Address: </h5>
                <input type="text" autoComplete="off" id="emailAddress" required minLength={3} maxLength={25}/>
                </div>     

                <button type="submit">Submit</button>
            </form>

        </div>

    )
    

}