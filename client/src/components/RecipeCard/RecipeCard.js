import React from 'react';


function RecipeCard({ label, image, ingredient, url }) {

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
          <a className="url-recipe" href={url} > <button className="button-recipe"> Take me to full recipe </button> </a>
        </div>
      </div>
    </article>
  )
}

export default RecipeCard;

