import React from 'react'

function Recipe({rec}) {
  console.log("From recipe", rec);
    return (
        <article className="flip-card" key={rec.totalTime}>
            <div className="inner">
              <div className="front">
                <img className="image" src={rec.image} alt={rec.label} />
              </div>
              <div className="back">
                <p>{rec.label}</p>
              </div>
            </div>
        </article>
    )
}

export default Recipe;
