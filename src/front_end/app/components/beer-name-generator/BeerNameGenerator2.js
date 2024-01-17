
import React, { useState } from 'react';


const BeerNameGenerator2 = () => {
  // manage input values
  const [taste, setTaste] = useState('');
  
  // manage error message
  const [errorMessage, setErrorMessage] = useState('');

  const webUrl = "http://localhost:8080/api/generate"; 

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      taste: event.target.taste.value,
      };

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
        throw new Error(`Whoops, still doesn't fetch.`);
      }

      if (response.ok) {
        console.log(data);

        // setCookie('username', data.username, {
        //   httpOnly: false,
        //   path: '/',
        // });
        // router.push('/user/profile');
        
        
    }

      console.log("request data:", data);
      
      setTaste('');
      setErrorMessage('');

      //handle error
    } catch (error) {
      setErrorMessage(error.message);
      console.error('Beer name generation error: ', error);
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <h3>Enter one taste word</h3>
        {/* error message only displayes if present */}
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <div className="container">
          <div className="row">
            <div className="form-item col-4">
              <label>Word of flavor</label>
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
        <button type="submit">Fetch!</button>
      </form>
    </div>
  );
};

export default BeerNameGenerator2;
