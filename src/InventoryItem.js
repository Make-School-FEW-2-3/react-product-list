import React, { Component } from 'react'

export default class InventoryItem extends Component {
  render() {
    return (
      <div>
      <div key={this.props.id}>
        <h1>{this.props.name}</h1>
        <p>{this.props.price}</p>
        <p>{this.props.description}</p>
      </div>
      </div>
    )
  }
}

