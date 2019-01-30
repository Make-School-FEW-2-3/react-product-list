import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import InventoryItem from './InventoryItem'
import CategoryButton from './CategoryButton'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       category: null,
    }
  }
  
  getCategories() {
    return categories.map((cat) => 
    (<CategoryButton 
      label= {cat} 
      key= {cat}
      onClick={() => {
        if (this.state.category !== cat)
          this.setState({category: cat})
        else
          this.setState({category: null})
      }}
    />))
  }
  render() {
    return (
      <div className="App">
        <h1>Show products here</h1>

        <ul className="category-list">
          {this.getCategories()}
        </ul>

        <ul>
          {inventory.map(currentItem => {
            if(this.state.category === null || this.state.category === currentItem.category) {
              return <InventoryItem key={currentItem.id} {...currentItem}/>
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
