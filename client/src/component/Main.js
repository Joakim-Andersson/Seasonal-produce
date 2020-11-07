import React, { useState } from "react";
import Recipe from './Recipe';
const fetch = require('node-fetch');
// import axios from "axios";

function Main({ foodNow, nowMonth}) {
    const [searchState, setSearchState] = useState([]);

    const getSearch = async (search) => {
        const response = await fetch(
            `http://localhost:8000/food/${search}`
        );
        const data = await response.json();
        setSearchState(data);
    }

    return (
        <div className="main-veggielist">
            <h3 className="month-name" >{nowMonth}</h3>
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
                {searchState.length !== 0 && searchState.map(
                    recipe => (<Recipe key={recipe.recipe.label} label={recipe.recipe.label} image={recipe.recipe.image} ingredient={recipe.recipe.ingredientLines} />))}
            </ul>
        </div>
    )
}

export default Main;