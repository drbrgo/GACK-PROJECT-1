'use client'

import Link from 'next/link';
import FridgeSearch from './fridge-admin/FridgeSearch';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
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
    const [beers, setBeers] = useState<Beer[]>([])
    const webUrl = "http://localhost:8080";

    const handleSearch = async (username) => {
      console.log(`Searching for user: ${username}`);
    
      router.push(`/user/fridge/guest/${username}`);
      // Fetch data from the desired API endpoint
      try {
        const response = await fetch(webUrl + `/user/fridge/getBeers/guest/${username}`)
        //don't need this method chaining because you are using 'await'
        // .then(response => response.json())
        // .then(data => {
        const data = await response.json();
         
          console.log('Fetched data:', data);
          //apparently not needed? In any case, it does not work. to setBeers(data) and then beers.map((beer: Beer)) -- returns an empty array
          setBeers(data);
          //use data.map for success
          
          const allBeers = data.map((beer: Beer) => {
            console.log("User beer data: ", beer);
            return( 
                < FridgeDisplay 
                key={props.beer.id}
                beer={props.beer}
                setBeers={props.setBeers}
                //favorite={props.favorite.checked ? "true" : "false"}
                />
             )
          })
          // setBeers(allBeers)
          //console.log(beers);
          console.log(allBeers);
          console.log(username);
          console.log(beers);
          onSearch(username, allBeers);
      // useEffect(() => {
      //   console.log("Has beers been set before mapping?", beers); // This will log the updated state after it has been set.

      //   const allBeers = beers.map((beer: Beer) => {
      //     return( 
      //         < FridgeDisplay 
      //         key={beer.id}
      //         beer={beer}
      //         setBeers={props.setBeers}
      //         //favorite={props.favorite.checked ? "true" : "false"}
      //         />
      //      )
      //   })
      // }, [beers]); // The useEffect hook will run whenever 'beers' state changes.
    } catch (error) {
      console.error('Error fetching data:', error);
    }
      
      } 
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
    