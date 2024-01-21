'use client';
import React from 'react';
import { useState, useId, useEffect } from 'react';

export default function FridgeSearch({onSubmit}) {

  const [username, setUsername]= useState('')
  

  const searchUrl = `/user/fridge/guest/${username}`;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
  };
  
        return (
          <form onSubmit={handleSubmit}>
          <label>
            Search for username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Type username to find fridge' />
          </label>
          <button type="submit">Search</button>
        </form>
      );


}