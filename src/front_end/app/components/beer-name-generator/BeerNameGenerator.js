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
        <p>We don't just build beers around here. We also build some of the best beer names out there. Hit the button below to generate a novel name for your
          new brew.</p>
        <button onClick={handleSubmit}>Generate!</button>
        {randomBeerName && (
        <div>
          <h3>Your new brew shall be known as...</h3>
          <ul>
        {Object.values(randomBeerName).map((value, index) => (
          <li key={index}  style={{ display: 'inline', margin: '0 2px'}}>{value}</li>
        ))}
      </ul>
      <h4>Feel free to rename it by clicking the button again, or by editing it in your <a href = '/user/fridge'>fridge</a>.</h4>
          {/* <pre>{JSON.stringify(matchingBeers, null, 2)}</pre> this uses JSON format to render the values. not ideal!*/}
        </div>
      )}
    </div>
    )

}

export default BeerGenerator;