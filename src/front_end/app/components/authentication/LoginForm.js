// 'use client';
// import React, { useState } from 'react';


// export default function LoginForm() {
    
//     const webUrl = "http://localhost:8080/"

//     // manage input values
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   // manage error message
//   const [errorMessage, setErrorMessage] = useState('');


//     const handleSubmit = async(event) => {
//         event.preventDefault();

//         const data = {
//             username: event.target.username.value,
//             password: event.target.password.value
//         }

//         //console.log(data);
//         await fetch(webUrl, {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data),
//         }).then((response) => response.json()).then(data => {
//             console.log(data);
//             //this sends the data to the backend, and then back to the front end to test that it works. 
//         })
//     }

//     return (
//         <div className= "flex justify-center">
//             <form onSubmit = {handleSubmit}>
//                 <h1>Login</h1>
//                 <div class="container">
//                 <div class="row">
//                     <div class="form-item col-4">
//                         <label>Username</label>
//                         <input type="text" autoComplete="off" id="username" />
//                     </div>
//                 </div>
//                 </div>
//                 <div class="container">
//                 <div class="row">
//                     <div class="form-item col-4">
//                         <label>Password</label>
//                         <input type="password" autoComplete="off" id="password" />
//                     </div>
//                 </div>
//          </div>

//                 <button type="submit">Login!</button>
//             </form>
//         </div>
//     )

    


// }

import React, { useState } from 'react';

const LoginForm = () => {
  // manage input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // manage error message
  const [errorMessage, setErrorMessage] = useState('');

  const webUrl = "http://localhost:8080/"; 

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    try {
      const response = await fetch(webUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': webUrl,
          // 'Vary': 'Origin'
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // checking if response status is not OK (as in a 4-- or 5-- response status code)
        throw new Error(`You're flagged! Have a glass of water and try again with valid credentials.`);
      }

      if (response.ok) {
        // extract session ID from response headers
        const sessionId = response.headers.get('Set-Cookie');
        // store the session ID in localStorage or cookies
        localStorage.setItem('sessionId', sessionId);
        //document.cookie(sessionId); cookie is not a function
    }

      //const responseData = await response.json();
      console.log("request data:", data);
      //console.log("response data", responseData);

      // reset input values and error message upon successful submission
      setUsername('');
      setPassword('');
      setErrorMessage('');

      //handle error
    } catch (error) {
      setErrorMessage(error.message);
      console.error('Login Error:', error);
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
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
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

export default LoginForm;
