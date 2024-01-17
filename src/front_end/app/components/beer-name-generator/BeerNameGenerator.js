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

       setRandomBeerName(responseData);


    } ;

    return (
        <div>
        <p>Generated beer name please </p>
        <button onClick={handleSubmit}>Generate!</button>
        {randomBeerName && (
        <div>
          <h3>Your new brew has a glorious name!</h3>
          <ul>
        {Object.values(randomBeerName).map((value, index) => (
          <li key={index}  style={{ display: 'inline', margin: '0 2px'}}>{value}</li>
        ))}
      </ul>
          {/* <pre>{JSON.stringify(matchingBeers, null, 2)}</pre> this uses JSON format to render the values. not ideal!*/}
        </div>
      )}
    </div>
    )

}

export default BeerGenerator;