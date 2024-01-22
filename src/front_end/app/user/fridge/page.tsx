'use client'
import FridgeAdmin from "../../components/fridge-admin/FridgeAdmin";
import { useState, useEffect } from "react";
import React from "react";
import NavBarCustom from "../../components/NavBarCustom";
import { getCookies } from 'cookies-next';

import CheckForLoggedIn from "../../components/authentication/CheckForLoggedIn";
import { getCookies } from "cookies-next";


    interface Beer {
        id : number,
        name: string,
        tastingNotes: string,
        abv: number,
        favorite: boolean

    }
export default function fridgeAdmin(){

    const webUrl = "http://localhost:8080"

    const [beers, setBeers] = useState<Beer[]>([])
    const username = getCookies().username

    
    const username = getCookies().username
    // // delete below line, only needed for testing:
    // const username= "testername"   
    

    useEffect(function(){
        const getBeers = async() => {
            await fetch(webUrl + '/user/fridge/getBeers/' + username)
            .then(response => response.json())
            .then(data => {
                setBeers(data)
            })
        }
        getBeers()
    },[])
    return(
        <div>
        <CheckForLoggedIn>
        <h2>Welcome to your fridge, {username}</h2>
            
        
        <div>
        <FridgeAdmin 
        beers={beers}
        setBeers={setBeers}
        />
        </div>
        </CheckForLoggedIn>
        </div>
    )
}