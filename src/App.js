import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import InventoryItem from './InventoryItem'
import './App.css';


class App extends Component {
  getCategories() {
    return categories.map((cat) => <li key={cat}><button>{cat}</button></li>)
  }
  render() {
    return (
      <div className="App">
        <h1>Show products here</h1>

        <ul>
          {this.getCategories()}
        </ul>

        <ul>
          {inventory.map(currentItem => {
            return InventoryItem(currentItem)
          })
          }
        </ul>

      </div>
    );
  }
}

export default App;
