'use client';

import React from 'react';
import BeerNameGenerator from '../../components/beer-name-generator/BeerNameGenerator';
import SimilarBeerGenerator from '../../components/beer-name-generator/SimilarBeerGenerator';
import BeerGenerator from '../../components/beer-name-generator/BeerNameGenerator'
import { useState, useEffect } from "react";

interface similarBeers {
    index: number,
    name: string,
}

const BeerCreated = () => {

    const webUrl: string = "http://localhost:8080/api/generate";

    const [similarBeers, setSimilarBeers] = useState<similarBeers[]>([]);


    return(
        <div>
            <p>This is the beer is created page!</p>
            <BeerGenerator/>
            <SimilarBeerGenerator 
            similarBeers={setSimilarBeers}/>
        </div>
    )
}

export default BeerCreated;