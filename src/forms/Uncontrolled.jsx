import React, { Component } from 'react';

class Uncontrolled extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.input = React.createRef();
    }
    
    handleChange = (newText) => {
        console.log(newText);
    }
    render() {
        return (
            <div className="App2">
                <div className="container">
                    <input type="text"
                        placeholder="Your message here.."
                        ref={this.input}
                        onChange={(event) => this.handleChange(event.target.value)}
                    />
                </div>
            </div>
            
        );
    }
}
export default Uncontrolled;