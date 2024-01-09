'use client'
import React from "react";
export default function FridgeAdmin(){

    const webUrl = "http://localhost:8080"



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
        <>
        <div>
        <script>

        </script>
        </div>
        <div className="flex justify-center"> 
            <table className="bg-green-300/60 p-2 rounded-md">
            <tr>
                <th>Beer Name</th>
                <th>Picture?</th>
                <th>Type</th>
                <th>ABV</th>
                <th>Notes</th>
            </tr>
            <tr>
                <td>first beer name</td>
                <td>First beer pic</td>
                <td>First beer type</td>
                <td>first beer ABV</td>
                <td>First beer notes</td>
                <button>Delete</button>
            </tr>
            </table>
            
            
        </div>
        </>
    )
}