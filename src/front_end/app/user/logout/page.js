'use client'

import NavBarDummy from '../../components/authentication/NavBarDummy';
import React from 'react';
import LogoutForm from '../../components/authentication/LogoutForm';
import CheckForLoggedIn from '../../components/authentication/CheckForLoggedIn';

const LogoutPage = () => {
    return(
        <div>
            <CheckForLoggedIn>

            <p>Are you sure you want to log out now?</p>
            {/* <NavBarDummy /> we'll see if it works without it and the answer is still no*/}
            <LogoutForm />
         </CheckForLoggedIn>
        </div>
    )
}

export default LogoutPage;