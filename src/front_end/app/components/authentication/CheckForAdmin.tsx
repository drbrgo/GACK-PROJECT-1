'use client';

import React, { useEffect, useState } from 'react';
import { getCookies } from 'cookies-next';

interface CheckForAdminProps {
  children: React.ReactNode;
}

const CheckForAdmin: React.FC<CheckForAdminProps> = ({ children }) => {
    // window.onload = function () {
        const [shouldRenderContent, setShouldRenderContent] = useState(false)
        useEffect(() => {


        //check for cookie
    const usernameCookie = getCookies().username;

    console.log (usernameCookie);

    if (usernameCookie != "admin") {
        document.open();
    document.write('<html><head><h3>Woah there!</h3></head><body>');
    document.write('<p>Administrators only</p>');
    document.write('<a href="/">Log in here</a>');
    document.write('</body></html>');
    document.close();
      window.location.href = '/'; 
    } else {
        setShouldRenderContent(true)
    }
  }), []; 

  return shouldRenderContent ?( <>{children}</> ) : null;
};

export default CheckForAdmin;
