import { useEffect, useState } from 'react';

const NavBarDummy = () => {
    const [user, setUser] = useState(null);

    const webUrl = "http://localhost:8080/"

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
                    history.push('/')
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data', error);
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