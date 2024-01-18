
import React, { useState } from 'react';


const SimilarBeerGenerator = (props) => {
  // manage input values
  const [taste, setTaste] = useState('');
  const [abv, setAbv] = useState('');
  const [beer, setBeer] = useState('');

  //manage output values
  const [matchingBeers, setMatchingBeers] = useState(null);
  
  // manage error message
  const [errorMessage, setErrorMessage] = useState('');

  //this post handler takes an abv, searches the api with it. then takes the keyword and searches the description of each beer returned
  const webUrl = "http://localhost:8080/api/generate"; 

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      taste: event.target.taste.value,
      abv: event.target.abv.value,
      };

      console.log(data);

    try {
      const response = await fetch(webUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // checking if response status is not OK (as in a 4-- or 5-- response status code)
        throw new Error(`Please make sure you have entered valid data in both fields and try again!`);
      }

      console.log(data);  
        
      const responseData = await response.json()
    //   .then(responseData => {
    //     props.setBeers(responseData);
    //   })
      console.log(responseData);
      setMatchingBeers(responseData); 
        
      //reset input field and error message
      setTaste('');
      setAbv('');
      setErrorMessage('');

      //handle error
    } catch (error) {
      setErrorMessage(error.message);
      console.error('Beer list generation error: ', error);
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <h3>Don't feel like putting in the elbow grease to make another? We've got you covered with our beer recommender below!</h3>
        <h4>Just enter one taste word and your preferred minimum ABV:</h4>
        {/* error message only displayes if present */}
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <div className="container">
          <div className="row">
            <div className="form-item col-4">
              <label>Word of flavor: </label>
              {/* value and onChange make inputs controlled components */}
              <input
                type="text"
                autoComplete="off"
                id="taste"
                value={taste}
                onChange={(event) => setTaste(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="form-item col-4">
              <label>ABV of choice: </label>
              {/* value and onChange make inputs controlled components */}
              <input
                type="text"
                autoComplete="off"
                id="abv"
                value={abv}
                onChange={(event) => setAbv(event.target.value)}
              />
            </div>
          </div>
        </div>

        <button type="submit">Fetch!</button>
      </form>
      {matchingBeers && (
        <div>
          <h3>Other beers you may enjoy:</h3>
          <ul>
        {Object.values(matchingBeers).map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
          {/* <pre>{JSON.stringify(matchingBeers, null, 2)}</pre> this uses JSON format to render the values. not ideal!*/}
        </div>
      )}
    </div>
  );
};

export default SimilarBeerGenerator;