import React, { useState } from 'react';

const BeerGenerator = () => {
    //manage input values

    //manage output values
    const [randomBeerName, setRandomBeerName] = useState(null); 

    //manage error message
    const [errorMessage, setErrorMessage] = useState('');

    //this get handler retrieves a random beer from the api
    const webUrl = "http://localhost:8080/api/random";

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(webUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            // body: JSON.stringify(''),
        });
    
        const responseData = await response.json();
        
       console.log(responseData);
    } ;

    return (
        <div>
        <p>Generated beer name please </p>
        <button onClick={handleSubmit}>Generate!</button>
        </div>
    )

}

export default BeerGenerator;