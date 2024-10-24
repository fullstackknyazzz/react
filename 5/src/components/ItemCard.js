import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div className="items-block__card">
      <img src={item.imgSrc} alt="" className="items-block__card-image margin-right" />
      <div className="items-block__group">
        <span className="items-block__card-title">{item.title}</span>
        <p className="items-block__card-description">{item.description}</p>
        <span className="items-block__card-price">{item.price}</span>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemCard;
