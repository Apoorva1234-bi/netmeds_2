

import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const QuantitySelector = ({ quantity, increment, decrement }) => {
  return (
    <ButtonGroup aria-label="Quantity Selector">
      <Button variant="outline-secondary" onClick={decrement}>-</Button>
      <Button variant="outline-secondary" disabled>{quantity}</Button>
      <Button variant="outline-secondary" onClick={increment}>+</Button>
    </ButtonGroup>
  );
};

export default QuantitySelector;
