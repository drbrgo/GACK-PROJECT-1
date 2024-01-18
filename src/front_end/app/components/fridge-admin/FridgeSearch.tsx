'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
//  import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useId } from 'react';

export default function FridgeSearch(props: any) {


  const webUrl = "http://localhost:8080"

  const router = useRouter();

    // const handleSubmit= (event) => {
    //     event.preventDefault()
    //     var formData= event.target.value;
    //     setFormData(formData)
    //     console.log(formData)
       
  //       router.push(webUrl + "/user/fridge/guest/");
       
    
 
  //       const id = useId();
  //       const [input, setInput] = useState(props?.value ?? '');
  //       return (
  //         <div>
  //         <label htmlFor={id}>Please specify:</label>
  //         <input id={id} value={input} onInput={e => setInput(e.target.value as HTMLTextAreaElement)}/>
  //         </div>
  // )
 }