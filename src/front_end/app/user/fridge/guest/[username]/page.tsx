"use client"


import { useEffect, useState } from 'react';
import NavBarCustom from '../../../../components/NavBarCustom';
import FridgeDisplay from '../../../../components/fridge-admin/FridgeDisplay';


export default function FridgeGuest({ username }, props) {
  const [beers, setBeers] = useState(props.allBeers);

  return (
    <div>
      <NavBarCustom
        onSearch={(username, allBeers) => console.log('Search initiated:', username, 'Data:', allBeers)}
      />
      <h1>Beer List for {username}</h1>
      < FridgeDisplay 
            key={props.beer.id}
            beer={props.beer}
          setBeers={props.setBeers}
        />
    </div>
  );
}