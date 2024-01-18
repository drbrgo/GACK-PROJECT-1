'use client'

import NavBarDummy from '../../components/authentication/NavBarDummy';
import React from 'react';
import LogoutForm from '../../components/authentication/LogoutForm';
import CheckForLoggedIn from '../../components/authentication/CheckForLoggedIn';

const ProfilePageDummy = () => {
    return(
        <div>
            <CheckForLoggedIn />
            <p>This is the user profile page!</p>
            {/* <NavBarDummy /> we'll see if it works without it and the answer is still no*/}
            {/* <LogoutForm /> has moved to the user/logout page*/}
        </div>
    )
}

export default ProfilePageDummy;