'use client';

import React from 'react';
import BeerNameGenerator from '../../components/beer-name-generator/BeerNameGenerator';
import BeerNameGenerator2 from '../../components/beer-name-generator/BeerNameGenerator2';
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
            <BeerNameGenerator2 
            similarBeers={setSimilarBeers}/>
        </div>
    )
}

export default BeerCreated;