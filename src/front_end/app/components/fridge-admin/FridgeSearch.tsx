'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useState, useId, useEffect } from 'react';
import GuestFridge from './GuestFridge';

export default function FridgeSearch(props: any) {
  interface Beer {
    id : number,
    name: string,
    tastingNotes: string,
    abv: number,
    favorite: boolean

}

  const webUrl = "http://localhost:8080"
  const [guestName, setGuestName]= useState('')
  

  //manage redirection
  const router = useRouter();

    const handleSubmit= (event) => {
        event.preventDefault()
        
      }
        return (
          <>
          <form onSubmit={handleSubmit}>
          <label>Please specify:
          <input  name="searchName" value={guestName} onChange={(event)=>setGuestName(event.target.value)} placeholder="Type username to find fridge"/>
          </label>
          <button type="submit" onClick={()=>{router.push('localhost:3000/user/fridge/guest')}}>Search</button>
          </form>
        
       </>
  );


}