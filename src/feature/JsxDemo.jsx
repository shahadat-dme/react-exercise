import React from 'react';

class JsxDemo extends React.Component {
    render() {
        var y = 5;

        return (
            <>
            <h1 className="myclass">Hello World</h1>
            <h1>This is JSX</h1>
            <h1>React is {5 + 5} times better with JSX</h1>
            

            <h1>{(y) < 10 ? "Hello" : "Goodbye"}</h1>
            </>
            
        )
        
    }
}

export default JsxDemo;


// Without JSX
/*
class JSXDemo extends React.Component {
    render() {
        return React.createElement("h1", null, "This is JSX");
    }
}
*/