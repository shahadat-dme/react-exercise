import React from "react";

const Destructuing2 = props => {
    const { name, heroName } = props
    return (
        <>
        <h1>
            Hello {name} HeroName: {heroName}
        </h1>
        </>
    )
}

{/* <Destructuing2 name="Shahadat" heroName="Sadu" /> */}

export default Destructuing2;