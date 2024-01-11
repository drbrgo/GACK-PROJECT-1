'use client'

import React from 'react';

const BeerCreated = (event: any) => {
        event.preventDefault();
        console.log("Submitted")
    return(
        <div>
            <p>
//               <form method="POST" enctype="application/x-www-form-urlencoded" action="/buildbeer/form'">
<form>

                   </p>

                   <fieldset>
                       <legend>In what type of barrels do you like your brewski to be brewed?</legend>
                       <p><label> <input type="radio" name="frenchOak" required value="French Oak">  </></label></p>
                       <p><label> <input type="radio" name="AmericanOak" required value="American Oak">  </></label></p>
                       <p><label> <input type="radio" name="Cedar" required value="Cedar">  </></label></p>
                   </fieldset>

                   <fieldset>
                       <legend>What type of flavor notes do you prefer?</legend>
                       <p><label> <input type="checkbox" name="extras" value="fruity"> Fruity </></label></p>
                       <p><label> <input type="checkbox" name="extras" value="malty"> Malty </></label></p>
                       <p><label> <input type="checkbox" name="extras" value="sour"> Sour </></label></p>
                       <p><label> <input type="checkbox" name="extras" value="sweet"> Sweet </></label></p>
                       <p><label> <input type="checkbox" name="extras" value="bitter"> Bitter </></label></p>
                       <p><label> <input type="checkbox" name="extras" value="hoppy"> Hoppy </></label></p>
                       <p><label> <input type="checkbox" name="extras" value="floral"> Floral </></label></p>
                   </fieldset>

                   <p>
                       <label>Local Date and Time
                           <input type="datetime-local" name="imbibe_time" required>
                       </></label>
                   </p>

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

export default BeerCreated;