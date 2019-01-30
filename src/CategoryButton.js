import React, { Component } from 'react'

export default class CategoryButton extends Component {
  render() {
    return <button className={this.props.className} onClick={this.props.onClick}>{this.props.label}</button>
  }
}
