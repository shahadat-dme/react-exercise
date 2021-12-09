import React, { Component } from "react";

class DestructuingClass extends Component {
    render() {
        const { name, heroName } = this.props
        return (
            <>
            <h1>
                Hello {name} HeroName: {heroName}
            </h1>
            </>
        )
    }
    }
    // <DestructuingClass name="Shahadat" heroName="Sadu"/>
    
export default DestructuingClass;