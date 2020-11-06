import React from 'react';


function Recipe({key, label, image, ingredient}) {
    return (
        <article className="flip-card" key={key}>
            <div className="inner">
              <div className="front">
                <img className="image" src={image} alt={label} />
              </div>
              <div className="back">
                <h3 className="recipe-name">{label}</h3>
                { ingredient.map(ingr => <p className="ingredient-part"> {ingr} </p> )}
              </div>
            </div>
        </article>
    )
}

export default Recipe;

