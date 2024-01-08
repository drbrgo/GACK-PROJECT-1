import React from 'react';

const CreateBeer = () => {
    return(
        <><div>
            < />!DOCTYPE html>
            <html lang="en" xmlns="http://www.w3.org/1999/html">

                <head>
                    <title>Build your beer</title>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="styles.css" />
                    <script src="" href=""></script>
                    <script src="" href=""></script>
                    <script src="" href=""></script>
                    < />!--    //The above Pending script file creation.
                    example script most likely <script> fetchPunkAPI("name of .js file w fetch function);
                        async function getPunkAPI(file) { let } myBeerObject = await fetch(file);
                        let y = await myBeerObject.text();
                        document.getElementById("demo").innerHTML = y;
                        }
                    </script>
                </body>
            </html>

            -->

        </head><body>

                <h1>What can I get for you?</h1>

                <div id="" data-testid="">
                    API id inserted here. id names to be filled in later.
                </div>

                <div id="">

                </div>
                <form method="POST" enctype="application/x-www-form-urlencoded" action="/buildbeer/form'">
                    < />!--navbar w username, settings, sign out, fridge?  <p> This <a href="https://www.pexels.com/photo/food-dinner-lunch-meal-4147875">Photo</a> was taken by <a-->
                        < />!--&lt;!&ndash;            href="https://www.pexels.com/@daria">Daria</a> on Pexels.&ndash;&gt; Not critical path: Testing out pexels image integration-->



                        <label>Name
                            <input type="text" name="customer_name" required>
                            </></label>
                        <label>Phone </label><label>
                            <input type="tel" name="phone_number">
                            </></label>
                        <p>
                            <label>Email
                                <input type="email" name="email_address">
                                </></label>
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

                                </form>
                            </body>
                        </html>

                    </div>
                    )
                    }

                    export default CreateBeer;