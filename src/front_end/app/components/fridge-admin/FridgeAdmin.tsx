'use client'
import React from "react";
import FridgeDisplay from "./FridgeDisplay";
import { getCookies } from "cookies-next";

interface Beer {
    id : number,
    name: string,
    tastingNotes: string,
    abv: number,
    favorite: boolean

}

export default function FridgeAdmin(props: any){

    const webUrl = "http://localhost:8080"
    const usernameCookie = getCookies().username;
    
    const removeBeer = (beerId: number, usernameCookie=getCookies().username) => {
        fetch(webUrl + '/user/fridge/removeBeer/' + beerId,  {
            method: "DELETE",
            body: usernameCookie
        }).then((response) => response.json()).then((data: Beer[]) => {
            props.setBeers(data);
        })
    }

    const allBeers = props.beers.map((beer: Beer) => {
        return( 
            < FridgeDisplay 
            key={beer.id}
            beer={beer}
            removeBeer={removeBeer}
            setBeers={props.setBeers}
            //favorite={props.favorite.checked ? "true" : "false"}
            />
         )
    })

    return(

        <div>
            {allBeers}
        </div>
    )
}