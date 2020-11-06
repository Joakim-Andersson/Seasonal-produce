import React, { useState, useEffect } from "react";
import Recipe from './Recipe';
import axios from "axios";
const fetch = require('node-fetch');

function Main({foodNow}) {
    const [searchState, setSearchState] = useState([]);

    const getSearch = async (search) => {
        console.log("thisis search", search);
        const response = await fetch(
            `http://localhost:8000/hello/${search}`
            );
            const data = await response.json();
            console.log("helllllllllll", data)
            setSearchState(data);
            console.log(searchState);
        }

    // .then(response => response.json())
    // .then(data => setsearchState((current) => [...current, data.data]))
    // console.log("after search", searchState);
    // }

    // const getSearch = async (search) => {
    //     try {
    //         const res = await axios(
    //             `http://localhost:8000/hello/${search}`
    //         );
    //         console.log("resultat", (res.data))
    //         if (res.data) {
    //             // let arr = [];
    //             // for (const data in res.data) {
    //             //     arr.push(`${data}: ${res.data}`);
    //             // }
    //             console.log(res.data);
    //         setsearchState([...searchState, (res.data.hits)]);
    //         console.log("------- sista console", searchState)
    //     }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <div className="main-veggielist">
            <h3 className="month-name" >November</h3>
        <ul className="monthFood" >
        {foodNow.length !== 0 && foodNow.map(
            food =>
            <li className="list-monthFood" onClick={() => getSearch(food)} key={food}>
                {food}
            </li>
            )
        }
        </ul>
        <ul className="recipes" >
        {searchState.length !== 0 && searchState.map(recipe => ( <Recipe key={recipe.recipe.label} label={recipe.recipe.label} image={recipe.recipe.image} ingredient={recipe.recipe.ingredientLines} />))}
        </ul>
        </div>
    )
}

export default Main;