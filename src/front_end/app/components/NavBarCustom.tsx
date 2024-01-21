'use client'

import Link from 'next/link';
import FridgeSearch from './fridge-admin/FridgeSearch';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import FridgeDisplay from './fridge-admin/FridgeDisplay';

export default function NavBarCustom ({ onSearch }, props: any) {
  interface Beer {
    id : number,
    name: string,
    tastingNotes: string,
    abv: number,
    favorite: boolean

}
    const router = useRouter();
    const [beers, setBeers] = useState<Beer[]>([]);
    const webUrl = "http://localhost:8080";

    const handleSearch = async (username) => {
        console.log(`Searching for user: ${username}`);
    
        // Fetch data from the desired API endpoint
      
        router.push(`/user/fridge/guest/${username}`);
        try {
          const response = await fetch(webUrl + `/user/fridge/getBeers/guest/${username}`)
          .then(response => response.json())
          .then(data => {
           
            console.log('Fetched data:', data);
            const allBeers = beers.map((beer: Beer) => {
              return( 
                  < FridgeDisplay 
                  key={beer.id}
                  beer={beer}
                  setBeers={props.setBeers}
                  //favorite={props.favorite.checked ? "true" : "false"}
                  />
               )
            })

            // setBeers(allBeers)
            console.log(beers);
            onSearch(username, allBeers);
          })
         
          // Call onSearch with both username and data
         
   
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
            {/* {allBeers} */}
        </div>
    
    );
    } 
    