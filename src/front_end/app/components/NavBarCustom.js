'use client'

import Link from 'next/link';
import FridgeSearch from './fridge-admin/FridgeSearch';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function NavBarCustom ({ onSearch }) {
    const router = useRouter();
    const [beers, setBeers] = useState([]);
    const webUrl = "http://localhost:8080";

    const handleSearch = async (username) => {
        console.log(`Searching for user: ${username}`);
    
        // Fetch data from the desired API endpoint
      
        router.push(`/user/fridge/guest/${username}`);
        try {
          const response = await fetch(webUrl + `/user/fridge/getBeers/guest/${username}`);
          const data = await response.json();
          console.log('Fetched data:', data);
        
        
          // Map the fetched data to the desired format
    const mappedBeers = data.map(beer => ({
        id: beer.id,
        name: beer.name,
        tastingNotes: beer.tastingNotes,
        abv: beer.abv,
      }));
          // Call onSearch with both username and data
          onSearch(username, data);
          setBeers(mappedBeers);
          // Redirect the user to the specified URL
         
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    return (
        <div className='topnav'>
            <h2>Thirsty? Let's build a beer together</h2>
            <a href='http://localhost:3000/user/createbeer'>Create a Beer</a>
            <a href="http://localhost:3000/user/fridge">My Fridge</a>
            <a href='http://localhost:3000/user/logout'>Logout</a>
            <FridgeSearch onSubmit={(username) => handleSearch(username)}/>
            
        </div>
    
    );
    } 
    