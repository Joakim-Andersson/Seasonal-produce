import React, { useState } from "react";
import Recipe from './Recipe';
import arrow from '../arrow.png';
const fetch = require('node-fetch');
// import axios from "axios";

function Main({ foodNow, nowMonth }) {
    const [searchState, setSearchState] = useState([]);
    const [clickedVeggie, setClickedVeggie] = useState('');

    const getSearch = async (search) => {
        const response = await fetch(
            `http://localhost:8000/food/${search}`
        );
        const data = await response.json();
        setSearchState(data);
        setClickedVeggie(search);
    }

    console.log(searchState, "nu ska den va tom")
    return (
        <div className="main-veggielist">
            <h3 className="month-name" >{nowMonth} veggies:</h3>
            <ul className="monthFood" >
                {foodNow.length !== 0 && foodNow.map(
                    food =>
                        <li key={Math.random()} className="list-monthFood" onClick={() => getSearch(food)} >
                            {food}
                        </li>
                )
                }
            </ul>
            {searchState.length === 0 ? (<div className="no-recipes-line"> <h3 className="no-recipes" >Please choose a vegetable above, and get inspired!</h3> <img className="arrow" src={arrow} alt="arrow" /> </div>) : (
                <section className="recipe-section">
                    <h3 className="recipe-header" > Recipes with {clickedVeggie} </h3>
                    <ul className="recipes" >
                        {searchState.length !== 0 && searchState.map(
                            recipe => (<Recipe key={recipe.recipe.label} label={recipe.recipe.label} image={recipe.recipe.image} ingredient={recipe.recipe.ingredientLines} />))}
                    </ul>
                </section>
            )}
        </div>
    )
}

export default Main;