'use client'
import FridgeAdmin from "../../components/fridge-admin/FridgeAdmin";
import { useState, useEffect } from "react";
import React from "react";
import NavBarCustom  from '../../components/NavBarCustom';
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

    useEffect(function(){
        const getBeers = async() => {
            await fetch(webUrl + '/user/fridge/getBeers/' + username)
            .then(response => response.json())
            .then(data => {
                console.log(data); 
                setBeers(data)
            })
        }
        getBeers()
    },[])
    return(
    <div>
        <CheckForLoggedIn>
        <div>
        
        <h2>Welcome to your fridge, {username}</h2>
            
        </div>
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