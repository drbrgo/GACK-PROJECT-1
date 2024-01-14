'use client'

import React from 'react';

export default function CreateBeer(props: any) {

    const webUrl: string = "http://localhost:8080"

    const formSubmit = async(event: any) => {
            event.preventDefault();
            console.log("Submitted")
            }

        const data = {
            username: String(event.target.username.value),
            Wolfenstein: String(event.target.Wolfenstein.value),
            barrelType: String(event.target.barrelType.value),
            basic: String(event.target.basic.value),
            recentPlace: String(event.target.recentPlace.value),
            userComments: String(event.target.userComments.value),
        }

        await fetch(webUrl + "/beercreated", { //beercreated??
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }).then((response) => response.json()).then((data: BeerCreated[]) => {
            props.setBeerCreated(data);

            event.target.username.value = ""
            event.target.Wolfenstein.value = ""
            event.target.barrelType.value = ""
            event.target.basic.value = ""
            event.target.recentPlace.value = ""
            event.target.userComments.value = ""

        })
    }

        }

    return(
        <div>
<link rel="stylesheet" href="formStyle.css" />
<form id="brewForm" onSubmit={formSubmit}> //name of form is createbeer?
//        <!--<script src="" href=""></script>-->
        <h1>Create your beer!</h1>
            <fieldset>
                        //<h1> username </h1>
                        //will be auto-populated assuming user is logged in. will add html for this later

                        <h1>What are your flavor preferences?</h1>

                           <input type="checkbox" name="extras" value="fruity"> Fruity </>
                           <input type="checkbox" name="extras" value="malty"> Malty </>
                           <input type="checkbox" name="extras" value="sour"> Sour </>
                           <input type="checkbox" name="extras" value="sweet"> Sweet </>
                           <input type="checkbox" name="extras" value="bitter"> Bitter </>
                           <input type="checkbox" name="extras" value="hoppy"> Hoppy </>
                           <input type="checkbox" name="extras" value="floral"> Floral </>
                           <input type="button" value="Submit" onclick="getSelectedCheckboxes()">


                               In what type of barrels do you like your brewski to be made?
                               <input type="radio" name="frenchOak" required value="French Oak">  </></label></p>
                               <input type="radio" name="AmericanOak" required value="American Oak">  </></label></p>
                               <input type="radio" name="Cedar" required value="Cedar">  </></label></p>

                           <p>
                               <label>
                                   <select id="barrelType" name="barrelType">
                                       <option value="" selected="selected">Select One</option>
                                       <option value="frenchOak">French Oak</option>
                                       <option value="americanOak">American Oak</option>
                                       <option value="cedar">Cedar</option>
                                   </select>
                               </label>
                           </p>

                           <p>
                               <label>Where was the last place you had a beer?
                                   <input type="text" name="recentPlace" required list="locations">
                               </></label>

                               <datalist id="locations">
                                   <option value="At home">
                                   <option value="The beach">
                                   <option value="In a cave">
                               </datalist>
                           </p>

                           <p>
                               <label>If animals could talk, which would be the rudest? Enter below
                                   <textarea name="comments" maxlength="500"></textarea>
                               </label>
                           </p>

                           <p><div class="animatedBox"><button id="loading-button">Build my Beer!</button>
                           <script src="buttonloader.js"></script></div></p>

            )
        }

export default CreateBeer;