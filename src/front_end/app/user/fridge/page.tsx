'use client'
import FridgeAdmin from "../../components/fridge-admin/FridgeAdmin";
import { useState, useEffect } from "react";
import { isInterfaceDeclaration } from "typescript";
import React from "react";

    interface Beers {
        id : number,
        name: string,
        tastingNotes: string,
        abv: number
    }
export default function fridgeAdmin(){

    const webUrl = "http://localhost:8080"

    const [beers, setBeers] = useState<Beers[]>([])

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
        <>
    <div>
    <p>This is a User's 'fridge admin' page</p>
        </div>
        <div>
    <FridgeAdmin 
    beers={beers}
    setBeers={setBeers}
    />
    </div>
    </>)
}