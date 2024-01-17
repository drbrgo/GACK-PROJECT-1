use client';

import React from 'react';
import { getCookies } from 'cookies-next';


const CreateBeer = (props: any) => {

        const webUrl = "http://localhost:8080/"

        const formSubmit = async(event: any) => {
                    event.preventDefault();
                    console.log("Submitted")
                    }

                const brewFormData = {

                    wolfenstein: String(event.target.wolfenstein.value),
                    barrelType: String(event.target.barrelType.value),
                    basic: IsNum(event.target.basic.value)
                    }


                    await fetch(webUrl + "user/createbeer", { //??
                                method: 'POST',
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(data),
                            }).then((response) => response.json()).then((brewFormData: BeerCreated[]) => {
                                props.setBeerCreated(brewFormData);


                                event.target.wolfenstein.value = ""
                                event.target.barrelType.value = ""
                                event.target.basic.value = ""

                            })
                        }
                            }
                        return(

        <div>
        <link rel="stylesheet" href="globals.css" />
            <form id=brewForm onSubmit={formSubmit}>
                <div>
                    <h3>Create your beer</h3>

                    <label for="username">Welcome!</label>
                              <input type="text" id="username" name="username" value={getCookie().username} readonly><br>
                    <fieldset>
                                           <legend>Barrel Type</legend>
                                       <select id="barrelType" name="barrelType">
                                           <option value="" name="selected">Select One</option>
                                           <option value="frenchOak">French Oak</option>
                                           <option value="americanOak">American Oak</option>
                                           <option value="cedar">Cedar</option>
                                       </select></fieldset>


                              <br>
                              <br>
                              <fieldset>
                              <label for="Blue Moon">Blue Moon</label>
                                            <input type="color" id="3" name="favcolor" value="#dc7633">
                                            <label for="Budwieser">Budweiser</label>
                                            <input type="color" id="2" name="favcolor" value="#f8c471">
                                            <label for="Samuel Adams">Samuel Adams</label>
                                            <input type="color" id="3" name="favcolor" type="color" value="#b03a2e">
                                            </fieldset>
                                        <br>
                                               <br>
                               <br>
                         <div class="animatedBox"><button id="loading-button">Build my Beer!</button>
                                     )
                                 }               <br>
                </div>