import React from 'react'

class ArrowSingleLine2 extends React.Component {
  render() {
    return (
      <button onClick={this.handleClick} style={this.state}>
        Set background to red
      </button>
    )
  }
  handleClick = () => {
    this.setState({ backgroundColor: 'cyan' })
  }
}

export default ArrowSingleLine2;