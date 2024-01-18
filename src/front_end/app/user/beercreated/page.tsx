'use client';

import React from 'react';
import BeerNameGenerator from '../../components/beer-name-generator/BeerNameGenerator';
import SimilarBeerGenerator from '../../components/beer-name-generator/SimilarBeerGenerator';
import BeerGenerator from '../../components/beer-name-generator/BeerNameGenerator'
import { useState, useEffect } from "react";
import CheckForLoggedIn from '../../components/authentication/CheckForLoggedIn';

interface similarBeers {
    index: number,
    name: string,
}

const BeerCreated = () => {

    const webUrl: string = "http://localhost:8080/api/generate";

    const [similarBeers, setSimilarBeers] = useState<similarBeers[]>([]);


    return(
        <div>
            <CheckForLoggedIn>
            <p>This is the beer is created page!</p>
            <BeerGenerator/>
            <SimilarBeerGenerator 
            similarBeers={setSimilarBeers}/>
            </CheckForLoggedIn>
        </div>
    )
}

export default BeerCreated;