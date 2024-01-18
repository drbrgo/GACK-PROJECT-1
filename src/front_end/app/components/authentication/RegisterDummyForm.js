import React, { useState } from 'react';

const RegisterDummyForm = () => {
  // manage input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  // manage error message
  const [errorMessage, setErrorMessage] = useState('');

  const webUrl = "http://localhost:8080/registerdummy"; 

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const data = {
    //   username: event.target.username.value,
    //   password: event.target.password.value,
    //   verifyPassword: event.target.verifyPassword.value,
    // };

    const data = {
      username,
      password,
      verifyPassword,
    };

    console.log("Data sent to backend:", data)

    try {
      const response = await fetch(webUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include'
      });

      if (!response.ok) {
        // checking if response status is not OK (as in a 4-- or 5-- response status code)--will need to update for username taken error AND pw no match error
        throw new Error(`Make sure your passwords match and maybe try a different username`);
      }

      //console log the returning data to make sure front and backend are talking
      const responseData = await response.json();
      console.log("request data:", data);
      console.log("response data", responseData);

      // reset input values and error message upon successful submission
      setUsername('');
      setPassword('');
      setVerifyPassword('');
      setErrorMessage('');

      //handle error
    } catch (error) {
      setErrorMessage(error.message);
      console.error('Registration Error:', error);
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <h1>Dummy Registration</h1>
        {/* error message only displayes if present */}
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <div className="container">
          <div className="row">
            <div className="form-item col-4">
              <label>Username</label>
              {/* value and onChange make inputs controlled components */}
              <input
                type="text"
                autoComplete="off"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="form-item col-4">
              <label>Password</label>
              <input
                type="password"
                autoComplete="off"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="form-item col-4">
              <label>Confirm Password</label>
              <input
                type="password"
                autoComplete="off"
                id="password"
                value={verifyPassword}
                onChange={(event) => setVerifyPassword(event.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit">Register, Dummy!</button>
      </form>
    </div>
  );
};

export default RegisterDummyForm;