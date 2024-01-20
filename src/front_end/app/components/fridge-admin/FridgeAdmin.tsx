'use client'
import React from "react";
import FridgeDisplay from "./FridgeDisplay";

interface Beer {
    id : number,
    name: string,
    tastingNotes: string,
    abv: number,
    favorite: boolean

}

export default function FridgeAdmin(props: any){

    const webUrl = "http://localhost:8080"

    //PUT request to DELETE beers
    const removeBeer = (beerId: number) => {
        fetch(webUrl + '/user/fridge/removeBeer/' + beerId, {
            method: "DELETE",
        }).then((response) => response.json()).then((data: Beer[]) => {
            props.setBeers(data);
        })
    }
    // Maps beers to allBeers 
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