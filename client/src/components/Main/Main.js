import React, { useState } from "react";
import RecipeSection from '../RecipeSection/RecipeSection';
import { Jumbotron, Button } from 'react-bootstrap'

const fetch = require('node-fetch');

function Main({ foodNow, nowMonth }) {
    const [searchState, setSearchState] = useState([]);
    const [clickedVeggie, setClickedVeggie] = useState('');

    const getSearch = async (search) => {

        const response = await fetch(
            // `http://localhost:8000/food/${search}`
            `https://seasonal-produce-client.herokuapp.com/food/${search}`
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
                    <Button variant="light">See vegetables in season</Button>
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
            </div>
            <RecipeSection searchState={searchState} clickedVeggie={clickedVeggie} />
        </React.Fragment>
    )
}

export default Main;