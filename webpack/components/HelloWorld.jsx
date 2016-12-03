import React, { Component } from 'react'

class HelloWorld extends Component {
  render() {
    return (
      <h1>Hello, World: {this.props.message}</h1>
    )
  }
}

module.exports = HelloWorld
