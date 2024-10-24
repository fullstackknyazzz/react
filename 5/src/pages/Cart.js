import React, { useState } from 'react';

import man_1 from '../images/man_1.jpg';
import woman_2 from '../images/woman_2.png';

const initialCartItems = [
  {
    id: 1,
    imgSrc: man_1,
    title: "ELLERY X M'O CAPSULE",
    price: 52.0,
    quantity: 1,
  },
  {
    id: 2,
    imgSrc: woman_2,
    title: "ELLERY X M'O CAPSULE",
    price: 52.0,
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imgSrc} alt={item.title} className="cart-item__image" />
            <div className="cart-item__details">
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <div className="cart-item__quantity">
                <label>Quantity: </label>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Grand Total: ${calculateTotal()}</h3>
      </div>
    </div>
  );
};

export default Cart;
