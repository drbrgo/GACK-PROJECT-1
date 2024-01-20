'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useState, useId } from 'react';

export default function FridgeSearch(props: any) {


  const webUrl = "http://localhost:8080"
  const [formData, setFormData]= useState("")
  const router = useRouter();

    // const handleSubmit= (event) => {
    //     event.preventDefault()
    //     var formData= event.target.value;
    //     setFormData(formData)
    //     console.log(formData)
       
    //     router.push(webUrl + "/user/fridge/guest/");
// }

   
        return (
          <div>
          <label>Please specify:
          <input  value={formData} onChange={e => setFormData(e.target.value )}/>
          </label>
          </div>
  )

  
}