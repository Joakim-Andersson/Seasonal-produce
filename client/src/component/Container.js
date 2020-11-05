import React from "react";
import Main from './Main';

function Container({foodNow}) {

    return (
        <div className="cards-container">
        <Main foodNow={foodNow}/>
        </div>
    )
}

export default Container;
