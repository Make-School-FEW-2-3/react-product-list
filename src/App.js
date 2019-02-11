/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import inventory, { categories } from './inventory';
import InventoryItem from './InventoryItem';
import CategoryButton from './CategoryButton';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: null,
    };
  }

  getCategories() {
    if (categories.indexOf('All') === -1) {
      categories.push('All');
    }

    return categories.map((cat) => {
      const { category } = this.state;
      const active = category === cat;
      return (
        <CategoryButton
          label={cat}
          key={cat}
          className={`active-${active}`}
          onClick={() => {
            if (!active && cat !== 'All') {
              this.setState({ category: cat });
            } else {
              this.setState({ category: null });
            }
          }}
        />
      );
    });
  }

  render() {
    const { category } = this.state;
    return (
      <div className="App">
        <h1>Show products here</h1>

        <ul className="category-list">
          {this.getCategories()}
        </ul>

        <ul>
          {inventory.map((currentItem) => {
            if (category === null || category === currentItem.category) {
              return <InventoryItem key={currentItem.id} {...currentItem} />;
            }
            return null;
          })
          }
        </ul>

      </div>
    );
  }
}

export default App;
