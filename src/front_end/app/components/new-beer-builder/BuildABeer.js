'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CheckForLoggedIn from '../authentication/CheckForLoggedIn';

export default function BuildABeer () {
    const webUrl = "http://localhost:8080";


//manage input values
    const [name, setName] = useState('');
    const [fridge, setFridge] = useState('');
    const [tastingNotes, setTastingNotes] = useState('');
    const [abv, setAbv] = useState('');
    const [setting, setSetting] = useState('');
    const [readingMaterial, setReadingMaterial] = useState('');
    const [sockColor, setSockColor] = useState('');
    const [listNumber, setListNumber] = useState('');
    const [favorite, setFavorite] = useState('');

    //manage error message 
    const [errorMessage, setErrorMessage] = useState('');

    //manage redirection
    const router = useRouter();


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name: "Unnamed Beer",
            fridge: event.target.name.value,
            tastingNotes: event.target.tastingNotes.value,
            abv: event.target.abv.value,
            setting: event.target.setting.value,
            readingMaterial: event.target.readingMaterial.value,
            sockColor: event.target.sockColor.value,
            listNumber: event.target.listNumber.value,
            favorite: false
        }

        console.log(data);

        try{
            const response = await fetch(webUrl + "/user/buildabeer", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify(data),
            });

            //check for a 4 or 500 response code
            if(!response.ok) {
                throw new Error(`Skunked, spoiled or otherwise nasty! Please try again`);
            }

            if(response.ok) {
                console.log(response.body);
                router.push('/user/beercreated');
            }

            //reset values upon successful submission
            setName('');
            setFridge('');
            setAbv('');
            setTastingNotes('');
            setListNumber('');
            setReadingMaterial('');
            setSetting('');
            setSockColor('');
            setErrorMessage('')



        } catch (error) {
            setErrorMessage(error.message);
            console.error('Brew Error:', error);
        }

    }

    return(
        <div>
            <CheckForLoggedIn>
            <form onSubmit={handleSubmit}>
                <h1>Let's get brewing</h1>
                {/* error message only displayes if present */}
                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                <div>
                    <h5>Of all the flavors you can put words to, which do you crave? </h5>
                    
                    <input
                         type="text"
                         autoComplete="off"
                         id="tastingNotes"
                         value={tastingNotes}
                         onChange={(event) => setTastingNotes(event.target.value)}
                        required minLength={2} maxLength={200}
                    />
                </div>
                <div>
                    <h5>From bread juice to barleywine: what will the ABV be?</h5>
                    <input
                        type="number"
                        autoComplete="off"
                        id="abv"
                        value={abv}
                        onChange={(event) => setAbv(event.target.value)}
                        required maxLength={2}
                    />
                </div>
                <br></br><br></br>
                <div>
                    {/* <h5>Pick any number from this list: </h5> */}
                    <label for="listNumber" style={{ fontSize: '13px', fontWeight: 'bolder', fontFamily: 'Arial, sans-serif'}}>Next, pick any number from this list:</label><br></br><br></br>
                    <select name="listNumber" id="listNumber" onChange={(event) => setListNumber(event.target.value)}>
                        <option value="0">No</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="564">564</option>
                        <option value="31">31</option>
                        <option value="16">16</option>
                        <option value="45">45</option>
                        <option value="98">98</option>
                        <option value="13">13</option>
                    </select > 
                </div>
                <br></br>
                <div>
                    <h5>Enter the color of your socks: </h5>
                    <input
                        type="text"
                        autoComplete="off"
                        id="sockColor"
                        value={sockColor}
                        onChange={(event) => setSockColor(event.target.value)}
                        required minLength={2} maxLength={45}
                    />
                </div>
                <div>
                    <h5>In what sort of setting will you drink this beer? Say more with less: </h5>
                    <input
                        type="text"
                        autoComplete="off"
                        id="setting"
                        value={setting}
                        onChange={(event) => setSetting(event.target.value)}
                        required maxLength={300}
                    />
                </div>
                <div>
                    <h5>What did you read today?</h5>
                    <input type="radio" id="Zilch" name="readingMaterial" value="Zilch" onChange={(event) => setReadingMaterial(event.target.value)} />
                    <label for="readingMaterial">Zilch</label><br></br>
                    <input type="radio" id="Books are dumb" name="readingMaterial" value="Books are dumb" onChange={(event) => setReadingMaterial(event.target.value)} />
                    <label for="age2">Books are dumb</label><br></br>
                    <input type="radio" id="Yes" name="readingMaterial" value="Yes" onChange={(event) => setReadingMaterial(event.target.value)} />
                    <label for="age3">Yes</label><br></br>
                    <input type="radio" id="This and that" name="readingMaterial" value="This and that" onChange={(event) => setReadingMaterial(event.target.value)} />
                    <label for="age3">This and that</label><br></br> <br></br> <br></br> 

                    {/* <input type="submit" value="Submit"></input> */}
                </div>

                <button type="submit">Brew!</button>
            </form>


            </CheckForLoggedIn>
        </div>



    )
  



}
