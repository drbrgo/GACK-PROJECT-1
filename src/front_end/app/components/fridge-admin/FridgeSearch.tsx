'use client';
import React from 'react';
import { useState } from 'react';

export default function FridgeSearch({onSubmit}) {

  const [username, setUsername]= useState('')
  

  const searchUrl = `/user/fridge/guest/${username}`;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
    console.log("Is FridgeSearch handleSubmit being executed? Data received in FridgeSearch:", username)
  };
  
        return (
          <form onSubmit={handleSubmit}>
          <label>
            {/* Search for username: */}
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Type username to find fridge' />
          </label>
          <button type="submit">Search</button>
        </form>
      );


}