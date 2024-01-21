// 'use client'
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import GuestFridge from '../../../components/fridge-admin/GuestFridge';
// import NavBarCustom from '../../../components/NavBarCustom';

// export default function FridgeGuest2() {
//     interface Beer {
//         id : number,
//         name: string,
//         tastingNotes: string,
//         abv: number,
//         favorite: boolean
//     }
//     const router = useRouter();
//   const { username } = router.query;
//   const [beers, setBeers] = useState([]);
//   const webUrl = "http://localhost:8080"
  
//   if (!username) {
//     return <div>Loading...</div>;
//   }

//   useEffect(function() {
//     const getBeers=async () => {
        
//     if (username) {
//       fetch(webUrl + `/user/fridge/getBeers/guest/${username}`)
//         .then((response) => response.json())
//         .then((data) => setBeers(data))
//         .catch((error) => console.error('Error fetching beers:', error));
//     }
// }
//     getBeers()
//   }, [username]);

//   return (
//     <div>
//         <NavBarCustom/>
//       <h1>Beer List for {username}</h1>
//       <GuestFridge
//         beers={beers}
//     setBeers={setBeers}
//     />
//     </div>
//   );
// }