import React, { useState } from "react";
import Recipe from './Recipe';
import arrow from '../arrow.png';
import {Jumbotron, Button} from 'react-bootstrap'


const fetch = require('node-fetch');
// import axios from "axios";

function Main({ foodNow, nowMonth }) {
    const [searchState, setSearchState] = useState([]);
    const [clickedVeggie, setClickedVeggie] = useState('');

    const getSearch = async (search) => {

        const response = await fetch(
            `http://localhost:8000/food/${search}`
        );
        const recipes = await response.json();
        console.log(recipes)
        setSearchState(recipes);
        setClickedVeggie(search);

    }
    return (
        <React.Fragment>
            <Jumbotron>
                <h1>Seasonal produce</h1>
                <h2>Save the Planet - One meal at a time! </h2>
                <p>
                On a mission to make scandinavian chefs inspired each season. 
                Shopping nordic and seasonal produce helps the environment from unnessccary waste and transports. 
                Use this website to find recipes with a focus on fresh and locally grown vegetables.
                </p>
                <p>
                    <Button variant="light">Learn more</Button>
                </p>
            </Jumbotron>
            <div className="main-veggielist">
                <h2 className="month-name" >{nowMonth} veggies:</h2>
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
                                recipe => (<Recipe key={recipe.recipe.label} label={recipe.recipe.label} image={recipe.recipe.image} ingredient={recipe.recipe.ingredientLines} url={recipe.recipe.url} />))}
                        </ul>
                    </section>
                )}
            </div>
        </React.Fragment>
    )
}

export default Main;