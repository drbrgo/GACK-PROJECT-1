'use client'

import { getCookies } from 'cookies-next';

import React, { useState } from 'react';

export default function CreateBeer(props: any) {

    const webUrl: string = "http://localhost:8080"

    const formSubmit = async(event: any) => {
            event.preventDefault();
            console.log("Voila!")




        const simpleFormData = {

            wolfenstein: String(event.target.wolfenstein.value),
            barrelType: String(event.target.barrelType.value),
            basic: String(event.target.basic.value),
            recentPlace: String(event.target.recentPlace.value),

        }

        await fetch(webUrl + "user/createbeer", { //??
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }).then((response) => response.json()).then((featureData: BeerCreated[]) => {
            props.setBeerCreated(simpleFormData);


            event.target.wolfenstein.value = ""
            event.target.barrelType.value = ""
            event.target.basic.value = ""
            event.target.recentPlace.value = ""


        })
    }

        }

    return(
        <div>
<link rel="stylesheet" href="formStyle.css" />
<form id="brewForm" onSubmit={formSubmit}>
//
          </head>
              <body>
          <h1>Create your beer!</h1>
          <br>
          <label for="username">Welcome!</label>
          <input type="text" id="username" name="username" value= "getCookies().username" readonly><br>

          <br>
          <br>
              <fieldset>
                  <legend>How strong of a beer are ya lookin' for today?</legend>
                  <div>
                  <input type="radio" name="wolfenstein" required value="ggez"><label>Can I play, Daddy?</label>
                  </div>
                  <div>
                  <input type="radio" name="wolfenstein" required value="medium"><label>Bring 'em on!</label>
                  </div>
                  <div>
                  <input type="radio" name="wolfenstein" required value="hard"><label>I am Death incarnate!</label>
                  </div>
               </fieldset>
          <br>
              <fieldset>
                  <legend>Preferred flavor notes</legend>
                  <div>
                   <input type="checkbox" id="fruity" name="flavorNotes" value="fruity" onclick="getSelectedCheckboxes()"><label for="fruity">Fruity</label>
                   </div>
                     <div>
                   <input type="checkbox" id="malty" name="flavorNotes" value="malty" onclick="getSelectedCheckboxes()"><label for="malty">Malty</label>
                     </div>
                  <div>
                   <input type="checkbox" id="sour"  name="flavorNotes" value="sour" onclick="getSelectedCheckboxes()"><label for="sour">Sour</label>
                  </div>
                  <div>
                   <input type="checkbox" id="sweet" name="flavorNotes" value="sweet" onclick="getSelectedCheckboxes()"><label for="sweet">Sweet</label>
                  </div>
                  <div>
                   <input type="checkbox" id="bitter" name="flavorNotes" value="bitter" onclick="getSelectedCheckboxes()"><label for="bitter">Bitter</label>
                  </div>
                  <div>
                   <input type="checkbox" id="hoppy" name="flavorNotes" value="hoppy" onclick="getSelectedCheckboxes()"><label for="hoppy">Hoppy</label>
                  </div>
                  <div>
                  <label> <input type="checkbox" name="flavorNotes" value="floral" onclick="getSelectedCheckboxes()">Floral</label>
                  </div>
                  </fieldset>
          <br>
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
              <legend>Which one of these is the Pumpkin Spice Latte of beers?</legend><br>

              <label for="Blue Moon">Blue Moon</label>
              <input type="color" id="3" name="favcolor" value="#dc7633">
              <label for="Budwieser">Budweiser</label>
              <input type="color" id="2" name="favcolor" value="#f8c471">
              <label for="Samuel Adams">Samuel Adams</label>
              <input type="color" id="3" name="favcolor" type="color" value="#b03a2e">
              </fieldset>
          <br>
                 <br>



                   <legend>Where was the last place you had a beer?</legend>
                   <br>
                  <input type="text" name="recentPlace" required list="locations">

                  <datalist id="locations">
                      <option value="At home">
                      <option value="The beach">
                      <option value="In a cave">
                  </datalist>

          <br><br><br>
          <legend>If animals could talk, which one would be the most rude? Enter below<legend>
              <br>
                  <label for="comments"></label>
          <div class="commentBox"><textarea id="comments" name="userComments" rows="4"></textarea>
          <br>


          </body>

          <div class="animatedBox"><button id="loading-button">Build my Beer!</button>
            )
        }

export default CreateBeer;