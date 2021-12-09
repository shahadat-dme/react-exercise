import React from "react";

// condition ? <expression if true> : <expression if false>

const TernaryOperator = () => {
    // var favorite = "Programming";          //false - HTML
    var favorite = "JavaScript";      // true - JavaScript
    return (
        <div>
            {  (favorite === "JavaScript") ? "JavaScript" : "HTML"}
        </div>
    )
}

export default TernaryOperator;
