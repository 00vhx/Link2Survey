import React, { useState } from 'react';

const QuantitySelector = ({ min = 1, max = 100, initial = 1 }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrement = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantity-box" style={styles.container}>
      <button className="quantity-btn" style={styles.button} onClick={handleDecrement} disabled={quantity <= min}>-</button>
      <div className="quantity"style={styles.quantity}>{quantity}</div>
      <button className="quantity-btn" style={styles.button} onClick={handleIncrement} disabled={quantity >= max}>+</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    padding: '10px',
    margin: '0 10px',
    cursor: 'pointer',
  },
  quantity: {
    minWidth: '20px',
    textAlign: 'center',
  },
};

export default QuantitySelector;
