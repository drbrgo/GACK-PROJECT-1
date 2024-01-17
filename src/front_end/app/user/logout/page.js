'use client'

import NavBarDummy from '../../components/authentication/NavBarDummy';
import React from 'react';
import LogoutForm from '../../components/authentication/LogoutForm';

const LogoutPage = () => {
    return(
        <div>
            <p>Are you sure you want to log out now?</p>
            {/* <NavBarDummy /> we'll see if it works without it and the answer is still no*/}
            <LogoutForm />
        </div>
    )
}

export default LogoutPage;