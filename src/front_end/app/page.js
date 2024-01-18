 'use client'

import Image from 'next/image';
import styles from './page.module.css';
import LoginForm from './components/authentication/LoginForm';
import React, { useState } from 'react';

import { Adamina } from 'next/font/google';
export default function Home() {
    return (
      <div>
        {/* old version of navbar deprecated. new version is kept in layout.js */}
      {/* <p>Nav bar <button type="admin"><a href="/user/admin"> Admin</a></button> <button type="myfridge"><a href="/fridge/adminfridge">My Fridge</a></button><button type="myfriendsfridge"><a href="/fridge"> My Friends Fridge</a></button></p> */}

      <LoginForm />
      <p class="mt-5">Tired of the same old stuff, are you? <a href="/createprofile">Register here.</a></p>
      </div>
    )
  }