import React from 'react';


function Recipe({ label, image, ingredient }) {

  return (
    <article key={Math.random()} className="flip-card" >
      <div className="inner">
        <div className="front">
          <img className="image" src={image} alt={label} />
          <div className="centeredText">
            <h1 className="recipe-name nameFront" >{label}</h1>
          </div>
        </div>
        <div className="back">
          <h1 className="recipe-name">{label}</h1>
          {ingredient.map(ingr => <p key={Math.random()} className="ingredient-part"> {ingr} </p>)}
          <button className="button-recipe"> See full recipe </button>
        </div>
      </div>
    </article>
  )
}

export default Recipe;

