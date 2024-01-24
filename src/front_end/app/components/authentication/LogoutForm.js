
// const LoginForm = () => {
    
//     const webUrl = "http://localhost:8080/logout";

//     const handleSubmit = async (event) => {
//         event.preventDefault();

import { useState } from 'react';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';


const LogoutForm = () => {
  
  const webUrl = "http://localhost:8080/logout/";
  
  const [logoutError, setLogoutError] = useState(null);

  const [buildAnotherError, setBuildAnotherError] = useState(null);

  const router = useRouter();


  //test router--it works! need to import from next/navigation!
//   const testRouter = async () => {
//     try {
//        router.push('/');
//   } catch (error) {
//     console.log("router error");
//   }
// };


  const handleLogout = async () => {
    try {
      // Delete the 'username' cookie
      deleteCookie('username', { path: '/' });
      //redirect to home page
      router.push('/');
      //redirect("http://localhost:3000/"); doesn't work, returns a next_redirect error

    } catch (error) {
      console.error('Logout error:', error);
      setLogoutError('An error occurred during logout');
    }
  };

  const buildAnother = async () => {
    try {
      router.push('/user/createbeer');
    } catch (error) {
      console.error('Redirection error:', error);
      setBuildAnotherError('Perhaps it is time to go after all... ')
    }
  };

    //   // Send a POST request to the Spring Boot backend to end the user session
    //   const response = await fetch(webUrl, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify("logout"),
    //   });

    //   // Check if the request was successful (status code 2xx)
    //   if (response.ok) {
    //     console.log("logged out, dog")
    // //     // Optionally, you can redirect the user to the login page or perform other actions
    //      // redirect('http://localhost:8080');
    // //   } else {
    // //     // Handle errors if the request was not successful
    // //     setLogoutError('An error occurred during logout');
    //   }
    // // } catch (error) {
    // //   console.error('Logout error:', error);
    // //   setLogoutError('An error occurred during logout');
    // // }
 // };

  return (
    <div>
      <div>
      <button onClick={handleLogout}>Yes, get me out of here!</button>
      {logoutError && <p style={{ color: 'red' }}>{logoutError}</p>}
      </div>
      <div>
      <button onClick={buildAnother}>No! Let me build another beer!</button>
      {buildAnotherError && <p style={{ color: 'red' }}>{buildAnotherError}</p>}
      </div>
    </div>
  );
};

export default LogoutForm;