/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

const InventoryItem = (props) => {
  const { id, name, price, description } = props;
  return (
    <div>
      <div key={id}>
        <h1>{name}</h1>
        <p>{price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

InventoryItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default InventoryItem;
