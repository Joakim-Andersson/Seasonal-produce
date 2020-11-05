import axios from "axios";
import React, { useState } from "react";
import Recipe from './Recipe';

function Main({foodNow}) {
    const [searchState, setsearchState] = useState([]);

    console.log("foodnow search", foodNow);

    const getSearch = (search) => {

    console.log(search)
    axios.get(`/hello/q=${search}`)
    .then(response => response.data)
    .then(data => setsearchState(data))
    }
    console.log("after search", searchState);

    return (
        <div>
            {searchState}
        <ul>
        { foodNow.length !== 0 && foodNow.map(o => <li onClick={() => getSearch({o})} key={o}>{<a href={'/hello/q=' + o}>{o}</a>}</li>)
        }
        </ul>
        { searchState.length !== 0 && searchState.map(o => <li>{o.recipe[1]}</li>)}
        </div>
    )
}

export default Main;

