import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const NavBarDummy = () => {
    const [user, setUser] = useState(null);

    const webUrl = "http://localhost:8080/user/profile";

    //what is the correct library for this module?
   // const router = useRouter();

    useEffect(() => {
        // fetch user info from backend
        const fetchUser = async () => {
            try {
                const response = await fetch(webUrl, {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }); // probably need to change url
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                } else {
                    console.error('Failed to fetch user data');
                    router.push('/');
                }
            } catch (error) {
                console.error('Error fetching user data', error);
                router.push('/');
            }
        };

        fetchUser();
    }, []);

    return (
        <div>
            <h1>NavBarDummy</h1>
            <p>Hello</p>
            {user && (
                <div>
                    <p>Welcome, {user.username}!</p>
                </div>
            )}
        </div>
    );
};

export default NavBarDummy;