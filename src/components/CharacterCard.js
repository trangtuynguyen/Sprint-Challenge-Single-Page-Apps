import React from 'react'
import styled from 'styled-components';
import axios from "axios";


export default function CharacterCard ({ name, eps, gender, img, loc, spec, status }) {
  
  const CardDiv = styled.div`
    width: 50%;
    display: flex;
    flex-flow: row wrap;
  `;
  
  return (

    <CardDiv>
      <h1>{name}</h1>
      <h1>{eps}</h1>
      <h1>{gender}</h1>
      <img src={img}/>
      <h1>{loc}</h1>
      <h1>{spec}</h1>
      <h1>{status}</h1>
    </CardDiv>
  
  )
}
