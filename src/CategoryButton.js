import React, { Component } from 'react'

export default class CategoryButton extends Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.label}</button>
  }
}