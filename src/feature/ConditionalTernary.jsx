import React from "react";

function MissedGoal() {
    return <h1>MISSED!</h1>;
  }
  
  function MadeGoal() {
    return <h1>Goal!</h1>;
  }

  
function ConditionalTernary(props) {
    const isGoal = props.isGoal;
    return (
      <>
        { isGoal ? <MadeGoal/> : <MissedGoal/> }
      </>
    );
  }
export default ConditionalTernary;

{/* <ConditionalTernary isGoal={true}/> */}
{/* <ConditionalTernary isGoal={false}/> */}