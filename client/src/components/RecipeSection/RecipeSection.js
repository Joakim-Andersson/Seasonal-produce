import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'

function RecipeSection({searchState, clickedVeggie}) {
    return (
        <React.Fragment>
                            {searchState.length === 0 ? (
                    <div className="no-recipes-line">
                        <h3 className="no-recipes" >Please choose a vegetable above, and get inspired!</h3>
                    </div>
                ) : (
                    <section className="recipe-section">
                        <h3 className="recipe-header" > Recipes with {clickedVeggie} </h3>
                        <ul className="recipes" >
                            {searchState.length !== 0 && searchState.map(
                                recipe => (<RecipeCard key={recipe.recipe.label} label={recipe.recipe.label} image={recipe.recipe.image} ingredient={recipe.recipe.ingredientLines} url={recipe.recipe.url} />))}
                        </ul>
                    </section>
                )}
        </React.Fragment>

    )
}

export default RecipeSection
