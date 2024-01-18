
import { getCookies } from 'cookies-next';

const CheckForLoggedIn = () => {

window.onload = function () {
    
    const requiredCookie = getCookies().username;

    if (!requiredCookie) {
        //overwrite page
        document.open();
        document.write('<html><head><h1>Not so fast!</h1></head><body>');
        document.write('<p>We must check your credentials. Go and get yourself logged in.</p>');
        document.write('</body></html>');
        document.close();
        // redirect to the login
        window.location.href = '/'; 
    }

};

}

export default CheckForLoggedIn;