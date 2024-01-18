'use client'
import GuestFridge from "../../../components/fridge-admin/GuestFridge"
import { useState, useEffect } from "react";
import React from "react";
import NavBarCustom from "../../../components/NavBarCustom";
import { useRouter } from 'next/navigation';

interface Beer {
    id : number,
    name: string,
    tastingNotes: string,
    abv: number
}


export default function fridgeAdminGuest (){
    const [beers, setBeers] = useState<Beer[]>([])

    const webUrl = "http://localhost:8080"
    const router = useRouter();
    const [formData, setFormData]= useState("")

    const handleSubmit = event => {
        event.preventDefault();
          const formData= event.target.value;
          // const formData = new FormData(form)
       
   
        setFormData(formData)
        console.log(formData)
       

    useEffect(function(){
        const getBeers = async() => {
            await fetch(webUrl + '/user/fridge/getBeers/' + formData)
            // window.location.href.substring(window.location.href.lastIndexOf('/') + 1
            .then(response => response.json())
            .then(data => {
                console.log(data); 
                setBeers(data)
               
            })
        }
        getBeers()
    },[])
       
    }

    return(
        <>
        <NavBarCustom/>
        <p>This is the fridge page for viewing another's fridge</p>
        <GuestFridge
        beers={beers}
    setBeers={setBeers}
    />
        </>
    )
}