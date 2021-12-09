import React from 'react'


class ArrowSingleLine extends React.Component {
  render() {
    return (
      <button
        onClick={() => this.setState({ backgroundColor: 'red' })}
        style={this.state}
      >
        Set background to red
      </button>
    )
  }
}

export default ArrowSingleLine;