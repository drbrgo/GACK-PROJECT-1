'use client'

import React from "react";

export default function CreateProfileForm() {

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log("Button clicked")

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h3>Create An Account To Become A Beer Enthusiast!</h3>
            <div>
                <h5>First Name: </h5>
                <input type="text" autoComplete="off" id="firstName" required minLength={3} maxLength={25}/>
                </div>

                <div>
                <h5>Last Name: </h5>
                <input type="text" autoComplete="off" id="lastName" required minLength={3} maxLength={25}/> 
                </div>

                <div>
                <h5>Birthdate: </h5>
                <input type="text" autoComplete="off" id="birthdate" required minLength={6} maxLength={6}/>
                </div> 

                <div>
                <h5>PhoneNumber: </h5>
                <input type="text" autoComplete="off" id="phoneNumber" required minLength={10} maxLength={10}/>
                </div>                   

                <div>
                <h5>Email Address: </h5>
                <input type="text" autoComplete="off" id="emailAddress" required minLength={3} maxLength={25}/>
                </div>     
                
                <div>
                <h5>Street Address </h5>
                <input type="text" autoComplete="off" id="streetAddress" required minLength={1} maxLength={20}/>
                </div>
                
                <div>
                <h5>City: </h5>
                <input type="text" autoComplete="off" id="city" required minLength={3} maxLength={15}/>
                </div>
                
                <div>
                <h5>State: </h5>
                <input type="text" autoComplete="off" id="state" required minLength={2} maxLength={15}/>
                </div>
                
                <div>
                <h5>Zip Code: </h5>
                <input type="text" autoComplete="off" id="zipCode" required minLength={5} maxLength={10}/>
                </div>

                <button type="submit">Submit</button>
            </form>

        </div>

    )
    

}