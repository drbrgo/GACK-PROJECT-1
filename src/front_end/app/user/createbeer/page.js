import React from 'react';
import CheckForLoggedIn from "../../components/authentication/CheckForLoggedIn";


const CreateBeer = () => {
    return(
        <div>
            <CheckForLoggedIn>
            <p>This is the build a beer page!</p>
            </CheckForLoggedIn>
        </div>
    )
}

export default CreateBeer;