import React from 'react';


function Recipe({label, image, ingredient}) {

    return (
        <article key={Math.random()} className="flip-card" >
            <div className="inner">
              <div className="front">
                <img className="image" src={image} alt={label} />
              </div>
              <div className="back">
                <h3 className="recipe-name">{label}</h3>
                { ingredient.map(ingr => <p key={Math.random()}  className="ingredient-part"> {ingr} </p> )}
              </div>
            </div>
        </article>
    )
}

export default Recipe;

