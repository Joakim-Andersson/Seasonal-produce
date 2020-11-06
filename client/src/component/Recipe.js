import React from 'react'

function Recipe({key, label, image}) {
    return (
        <article className="flip-card" key={key}>
            <div className="inner">
              <div className="front">
                <img className="image" src={image} alt={label} />
              </div>
              <div className="back">
                <p>{label}</p>
              </div>
            </div>
        </article>
    )
}

export default Recipe;
