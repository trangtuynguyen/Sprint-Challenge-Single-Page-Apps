import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import CharacterCard from "./components/CharacterCard";
import {useState, useEffect} from "react";
import axios from "axios";
import styled from 'styled-components';




export default function App() {
  
  return <main>
    <Header />
    <TabNav />
    <AppRouter />
  </main>
}