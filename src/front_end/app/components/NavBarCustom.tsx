'use client'

import Link from 'next/link';
import FridgeSearch from './fridge-admin/FridgeSearch';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import FridgeDisplay from './fridge-admin/FridgeDisplay';

const NavBarCustom = () => {
  
  const [searchUser, setSearchUser] = useState('');
  const router = useRouter();


  const handleSearch = (event) =>{
    event.preventDefault();
    //redirect to user/fridge/guest nextjs should know what to do with the query string and render the page while storing the query string separately
    router.push(`/user/fridge/guest?query=${searchUser}`)
  } 



// export default function NavBarCustom ({ onSearch }, props: any) {
//   interface Beer {
//     id : number,
//     name: string,
//     tastingNotes: string,
//     abv: number,
//     favorite: boolean

// }
//     const router = useRouter();
//     const [beers, setBeers] = useState<Beer[]>([]);
//     const webUrl = "http://localhost:8080";

//     const handleSearch = async (username) => {
//         console.log(`Searching for user: ${username}`);
      
//         router.push(`/user/fridge/guest/${username}`);

//         // Fetch data from the desired API endpoint

//         try {
//           const response = await fetch(webUrl + `/user/fridge/getBeers/guest/${username}`)
//           //don't need this method chaining because you are using 'await'
//           // .then(response => response.json())
//           // .then(data => {

//           const data = await response.json();
           
//             console.log('Fetched data:', data);

//             //apparently not needed? In any case, it does not work. to setBeers(data) and then beers.map((beer: Beer)) -- returns an empty array
//             setBeers(data);

//             //use data.map for success
            
//             const allBeers = data.map((beer: Beer) => {
//               console.log("User beer data: ", beer);
//               return( 
//                   < FridgeDisplay 
//                   key={beer.id}
//                   beer={beer}
//                   setBeers={props.setBeers}
//                   //favorite={props.favorite.checked ? "true" : "false"}
//                   />
//                )
//             })

//             // setBeers(allBeers)
//             //this console.log returns an empty array whether beers or allBeers
//             //console.log(beers);
//             console.log(allBeers);
//             console.log(username);
//             console.log(beers);
//             onSearch(username, allBeers);
//           // })
         
//           // Call onSearch with both username and data
         
   
//           // Redirect the user to the specified URL
         
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       };

    return (
        <div className='topnav'>
            <h2>Thirsty? Let's build a beer together</h2>
            <a href='http://localhost:3000/user/createbeer'>Create a Beer</a>
            <a href="http://localhost:3000/user/fridge">My Fridge</a>
            <a href='http://localhost:3000/user/logout'>Logout</a>
            <form onSubmit={handleSearch}>
              <label>
              {/* Search for username: */}
              <input type="text" value={searchUser} onChange={(e) => setSearchUser(e.target.value)} placeholder='Type username to find fridge' />
              </label>
              <button type="submit">Search</button>
          </form>
            {/* {allBeers} */}
        </div>
    
    );
    } 

    export default NavBarCustom;
    