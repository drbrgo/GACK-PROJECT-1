'use client'

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const GuestFridgeDisplay = () => {
  const searchParams = useSearchParams();
  const username = searchParams.get('query');
  const [userBeers, setUserBeers] = useState([]);
  //const webUrl = "http://localhost:8080/user/fridge/getBeers/guest/" + username + "/";
  
  const webUrl = new URL("http://localhost:8080/user/fridge/getBeers/guest/");
    // append the username as a query parameter. turn the key and it works. no more "no mapping" "no endpoint" errors
    webUrl.searchParams.append('username', username);


  useEffect(() => {
    
    console.log(username);
    console.log(webUrl);
    const fetchData = async () => {
        
      try {
        const response = await fetch (webUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
      }});
        
        const data = await response.json();
        setUserBeers(data);

      } catch (error) {
        console.error('Error fetching search results:', error);
      }

    };

    if (username) {
      fetchData();
    }
  }, [username]);

  return (
    <div>
    <h2>Fridge of: {username}</h2>
    <div className="fridge">
      {userBeers.length === 0 ? (
        <p>Your friend, {username}, has yet to start brewing!</p>
      ) : (
        <table className="bg-green-300/60 p-2 rounded-md">
          <thead>
            <tr>
              <th>Id</th>
              <th>Beer Name</th>
              <th>ABV</th>
              <th>Tasting Notes</th>
              {/* <th>Favorite?</th> */}
            </tr>
          </thead>
          <tbody>
            {userBeers.map((beer) => (
              <tr key={beer.id}>
                <td>{beer.id}</td>
                <td>{beer.name}</td>
                <td>{beer.abv}</td>
                <td>{beer.tastingNotes}</td>
                {/* <td>{beer.favorite}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
);
};

export default GuestFridgeDisplay;