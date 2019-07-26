import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import CharacterCard from "./components/CharacterCard";
import {useState, useEffect} from "react";
import axios from "axios";
import styled from 'styled-components';




export default function App() {
  
  const [data, setData] = useState([]);

  useEffect(()=>{

    axios.get("https://rickandmortyapi.com/api/character/")
    .then(info =>setData(info.data.results))
    .catch(error => console.log(error))
  },[])

  console.log(data);

  const AlignCard = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
  `;

  
  return <main>
    <Header />
    <TabNav />
    <AppRouter />
  </main>
}