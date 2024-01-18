'use client';

import React, { useEffect, useState } from 'react';
import { getCookies } from 'cookies-next';

interface CheckForLoggedInProps {
  children: React.ReactNode;
}

const CheckForLoggedIn: React.FC<CheckForLoggedInProps> = ({ children }) => {
    // window.onload = function () {
        const [shouldRenderContent, setShouldRenderContent] = useState(false)
        useEffect(() => {


        //check for cookie
    const usernameCookie = getCookies().username;

    if (!usernameCookie) {
        document.open();
    document.write('<html><head><h3>Woah there!</h3></head><body>');
    document.write('<p>No peaking behind the curtain. Go on and log in.</p>');
    document.write('<a href="/">Go on now</a>');
    document.write('</body></html>');
    document.close();
      window.location.href = '/'; 
    } else {
        setShouldRenderContent(true)
    }
  }), []; 

  return shouldRenderContent ?( <>{children}</> ) : null;
};

export default CheckForLoggedIn;
