'use client'

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import FridgeSearch from './fridge-admin/FridgeSearch';
// import FridgeSearch from './fridge-admin/FridgeSearch';
import fridgeAdminGuest from '../user/fridge/guest/page';

export default function NavBarCustom (props) {

    const webUrl = "http://localhost:8080"


    
    return (
        <div className='topnav'>
            <h2>Thirsty? Let's build a beer together</h2>
            <a href='http://localhost:3000/user/createbeer'>Create a Beer</a>
            <a href="http://localhost:3000/user/fridge">My Fridge</a>
            <a href='http://localhost:3000/user/logout'>Logout</a>
            <FridgeSearch />
        </div>
    
    )
    } 
    