import React, { useEffect, useState } from 'react';
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important : verify the 2nd `useEffect` parameter: the dependancies array!
        axios.get("https://rickandmortyapi.com/api/location/")
        .then(info =>setData(info.data.results))
        .catch(error => console.log(error))
    }, [])

    console.log(data);

    return <section className='character-list grid-view'>
        { data.map((loc,index) => <LocationCard
                residents={loc.residents.length}
                dimension={loc.dimension}
                name={loc.name}
                type={loc.type}
                />)
            }
        </section>

}
