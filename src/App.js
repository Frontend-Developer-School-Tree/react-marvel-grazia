import React from "react"


import MarvelCard from "./MarvelCard"


import heroes from "./heroes"

import "./App.css"

function App() {
    const skills = ["HTML","css","js Es5","js Es6","React"];

    skills.map(skill => {return skill})


    const heroComponent =  heroes.map( hero => {
    return (
        <div>

            <MarvelCard
            skillz={skills.join(" ")}
            key={hero.id}
            nome= {hero.nome}
            cognome= {hero.cognome}
            eta ={hero.eta}
            skill ={hero.skill}
            imgUrl={hero.imgUrl}/>

        </div>
    )})

    return (
        <div className="MainWrapper">
            <img
            src="https://seeklogo.com/images/M/marvel-comics-logo-31D9B4C7FB-seeklogo.com.png" alt="logo"/>
            <div className="Wrapper" style={{color:"white"}}>
                {heroComponent}
            </div>
        </div>
    )
}

export default App