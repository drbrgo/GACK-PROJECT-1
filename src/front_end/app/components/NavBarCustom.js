'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header () {

    const webUrl = "http://localhost:8080"

    const router = useRouter();
//Not sure whether we will need to use a href for the navbar or useRouter.
    const handleSubmit = (event) =>{
        event.preventDefault();
        router.push(webUrl+ '/user/fridge/');

    }
    return (
        <div className='topnav'>
            <h2>Thirsty? Let's build a beer together</h2>
            <a href='http://localhost:3000/user/createbeer'>Create a Beer</a>
            <a href="http://localhost:3000/user/fridge">My Fridge</a>
            <a href='http://localhost:3000/user/logout'>Logout</a>
            <input type='text' placeholder="Type username to find fridge"/>
        </div>
    
    )
    }