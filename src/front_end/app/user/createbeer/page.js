import React from 'react';
import CheckForLoggedIn from "../../components/authentication/CheckForLoggedIn";
import BuildABeer from "../../components/new-beer-builder/BuildABeer"


const CreateBeer = () => {
    return(
        <div>
            <CheckForLoggedIn>
            <BuildABeer />
           </CheckForLoggedIn>
        </div>
    )
}

export default CreateBeer;