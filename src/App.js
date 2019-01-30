import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import InventoryItem from './InventoryItem'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       category: null,
    }
  }
  
  getCategories() {
    return categories.map((cat) => <li 
    key={cat} 
    onClick={() => {
      if (this.state.category !== cat)
        this.setState({category: cat})
      else
        this.setState({category: null})
    }}><button>{cat}</button></li>)
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
            if(this.state.category === null || this.state.category === currentItem.category) {
              return InventoryItem(currentItem)
            }
            return null
          })
          }
        </ul>

      </div>
    );
  }
}

export default App;
