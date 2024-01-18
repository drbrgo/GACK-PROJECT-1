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

    
    const removeBeer = (beerId: number) => {
        fetch(webUrl + '/user/fridge/removeBeer/' + beerId, {
            method: "DELETE",
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

    const handleSubmit = async(event) => {
        event.preventDefault();
        
        const data={
            // Will this need to be where we edit beers? Delete beers here? 
        }
        // window.addEventListener("load", function() {
        //     fetch(webUrl + "/admin/" + fridgeId).then(function(response){
        //         console.log(response);
        //     });
        // });
      
        // await fetch(webUrl + "/fridge/{fridgeid}", {
        //     method: "GET", 
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data),
        // })

    }
    return(

        <div>
            {allBeers}
        </div>
    )
}