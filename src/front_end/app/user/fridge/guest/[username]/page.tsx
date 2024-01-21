"use client"


import { useEffect, useState } from 'react';
import NavBarCustom from '../../../../components/NavBarCustom';
import FridgeDisplay from '../../../../components/fridge-admin/FridgeDisplay';


export default function FridgeGuest({ username }, props) {
  const [beers, setBeers] = useState(props.beers);

  // const mappedBeers = props.beers.map(beer => ({
  //   id: beer.id,
  //   name: beer.name,
  //   tastingNotes: beer.tastingNotes,
  //   abv: beer.abv,
  // }));

  return (
    <div>
      <NavBarCustom
        onSearch={(username, allBeers) => console.log('Search initiated:', username, 'Data:', allBeers)}
      />
      <h1>Beer List for {username}</h1>

    </div>
  );
}