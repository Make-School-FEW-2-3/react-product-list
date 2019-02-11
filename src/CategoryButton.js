/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';


const CategoryButton = (props) => {
  const { className, onClick, label } = props;
  return <button type="button" className={className} onClick={onClick}>{label}</button>;
};

CategoryButton.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default CategoryButton;
