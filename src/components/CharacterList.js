import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(info =>setData(info.data.results))
    .catch(error => console.log(error))
  }, [])

  console.log(data)
  return <section className='character-list grid-view'>
    { data.map((char,index) => <CharacterCard
             key={index}
             name={char.name}
             origin={char.origin.name}
             img={char.image}
             loc={char.location.name}
             spec={char.species}
             status={char.status}
              />)
        }
    </section>

}
