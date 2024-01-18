'use client'
import { useState } from "react";
import { useEffect } from "react";
import FridgeDisplay from "./FridgeDisplay";

export default function GuestFridge(props: any){

    interface Beer {
        id : number,
        name: string,
        tastingNotes: string,
        abv: number
    }
    const webUrl = "http://localhost:8080"



        const allBeers = props.beers.map((beer: Beer) => {
            return( 
                < FridgeDisplay 
                key={beer.id}
                beer={beer}
                setBeers={props.setBeers}
                />
             )
        })  
    
        return(
    
            <div>
                {allBeers}
            </div>
        )
}