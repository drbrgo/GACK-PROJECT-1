'use client';

import React from 'react';
import BeerNameGenerator from '../../components/beer-name-generator/BeerNameGenerator';
import BeerNameGenerator2 from '../../components/beer-name-generator/BeerNameGenerator2';
//import { useState, useEffect } from "react";

const BeerCreated = () => {
    return(
        <div>
            <p>This is the beer is created page!</p>
            <BeerNameGenerator />
        </div>
    )
}

export default BeerCreated;