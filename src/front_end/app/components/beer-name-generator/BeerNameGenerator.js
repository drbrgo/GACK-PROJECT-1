import React, { useState } from 'react';
import { getCookies } from 'cookies-next';


const BeerGenerator = () => {
    //manage input values

    //manage output values
    const [randomBeerName, setRandomBeerName] = useState(null); 

    //manage error message
    const [errorMessage, setErrorMessage] = useState('');

    //this get handler retrieves a random beer from the api
    const webUrl = "http://localhost:8080/api/random";

    //get username from cookie
    const usernameCookie = getCookies().username;

    const data = {
      username: usernameCookie,
      password: "placeholder",
    }

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try{

        const response = await fetch(webUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if(!response.ok) {
          // checking if response status is not OK (as in a 4-- or 5-- response status code)
        throw new Error(`You cannot name what you have not yet built.`)
        }
    
        const responseData = await response.json();
        
       console.log(responseData);

       setRandomBeerName(responseData);

       //reset error message
       setErrorMessage('');

      } catch (error) {
        setErrorMessage(error.message);
      console.error('Beer name error. No beers associated with this user found: ', error);

      }


    } ;

    return (
        <div>
        <p>We don't just build beers around here. We also build some of the best beer names out there. Hit the button below to generate a novel name for your
          new brew.</p>
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
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