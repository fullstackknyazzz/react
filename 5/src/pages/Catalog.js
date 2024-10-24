import React, { useState } from 'react';
import ItemCard from '../components/ItemCard';

const items = [
  { id: 1, imgSrc: 'images/man_1.jpg', title: "Product 1", price: 52, size: 'S' },
  { id: 2, imgSrc: 'images/woman_2.png', title: "Product 2", price: 55, size: 'M' },
  { id: 3, imgSrc: 'images/man_3.png', title: "Product 3", price: 48, size: 'L' },
  { id: 4, imgSrc: 'images/woman_5.png', title: "Product 4", price: 60, size: 'XS' },
  // Добавить больше товаров, если нужно
];

const Catalog = () => {
  const [filterSize, setFilterSize] = useState('');

  const handleSizeChange = (e) => {
    setFilterSize(e.target.value);
  };

  const filteredItems = filterSize
    ? items.filter(item => item.size === filterSize)
    : items;

  return (
    <div className="catalog">
      <h2>Catalog</h2>
      <div className="catalog__filter">
        <label>Filter by size: </label>
        <select value={filterSize} onChange={handleSizeChange}>
          <option value="">All Sizes</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </div>

      <div className="catalog__items">
        {filteredItems.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
