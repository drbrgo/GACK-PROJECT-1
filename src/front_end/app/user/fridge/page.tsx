'use client'
import FridgeAdmin from "../../components/fridge-admin/FridgeAdmin";
import { useState, useEffect } from "react";
import React from "react";
import NavBarCustom  from '../../components/NavBarCustom';
import CheckForLoggedIn from "../../components/authentication/CheckForLoggedIn";

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

    useEffect(function(){
        const getBeers = async() => {
            await fetch(webUrl + '/user/fridge/getBeers')
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
        
        <p>This is a User's 'fridge admin' page</p>
            
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