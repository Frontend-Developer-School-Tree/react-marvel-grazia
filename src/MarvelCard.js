import React, { useState } from "react"

import "./MarvelCard.css"

function MarvelCard(props) {

    const [incrementCount, setCount] = useState(0);

    return (
        <div className="HeroCard">
            <img src={props.imgUrl} alt="hero" style={{width: 200, height: 200, borderRadius: "50%"}}/>
            <p>{props.skillz}</p>
            <h2>Io {props.nome} {props.cognome} ho {props.eta} anni, conosco molto bene {props.skill}</h2>
            <button onClick={() => setCount(incrementCount + 1)}>Likes: {incrementCount}</button>

        </div>
    )
}

export default MarvelCard
