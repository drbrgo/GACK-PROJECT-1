'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import FridgeSearch from './fridge-admin/FridgeSearch';
// import FridgeSearch from './fridge-admin/FridgeSearch';
import fridgeAdminGuest from '../user/fridge/guest/page';

export default function NavBarCustom (props) {

    const webUrl = "http://localhost:8080"

   

    interface Beer {
        id : number,
        name: string,
        tastingNotes: string,
        abv: number
    }
//Not sure whether we will need to use a href for the navbar or useRouter.
    // const handleSubmit = (event) =>{
    //     event.preventDefault();
    //     router.push(webUrl+ '/user/fridge/');
    // }

    const [beers, setBeers] = useState<Beer[]>([])

    
    return (
        <div className='topnav'>
            <h1>THIS IS THE HEADER FOR ALL PAGES</h1>
            <a href='http://localhost:3000/user/createbeer'>Create a Beer</a>
            <a href="http://localhost:3000/user/fridge">My Fridge</a>
            <a href='http://localhost:3000/user/logout'>Logout</a>
            {/* //<FridgeSearch /> */}
        </div>
    
    )
    } 
    