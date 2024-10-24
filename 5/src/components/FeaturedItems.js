import React from 'react';
import ItemCard from './ItemCard';

import man_1 from '../images/man_1.jpg';
import woman_2 from '../images/woman_2.png';
import man_3 from '../images/man_3.png';
import man_4 from '../images/man_4.png';
import woman_5 from '../images/woman_5.png';
import woman_6 from '../images/woman_6.png';


const featuredItems = [
  {
    imgSrc: man_1,
    title: "ELLERY X M'O CAPSULE",
    description: "Known for her sculptural takes on traditional tailoring.",
    price: "$52.00",
  },
  {
      imgSrc: woman_2,
      title: "ELLERY X M'O CAPSULE",
      description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00"
  },
  {
      imgSrc: man_3,
      title: "ELLERY X M'O CAPSULE",
      description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00"
  },
  {
      imgSrc: man_4,
      title: "ELLERY X M'O CAPSULE",
      description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00"
  },
  {
      imgSrc: woman_5 ,
      title: "ELLERY X M'O CAPSULE",
      description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00"
  },
  {
      imgSrc: woman_6 ,
      title: "ELLERY X M'O CAPSULE",
      description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00"
  }
];

const FeaturedItems = () => {
  return (
    <div className="items-block">
      <div class="items-block__header">
        <h2 className="items-block__header-title">Featured Items</h2>
        <span class="items-block__header-description">Shop for items based on what we featured in this week</span>
      </div>
      <div className="items-block__cards">
        {featuredItems.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
      <div class="items-block__button">
        <button className="items-block__button-all">Browse All Products</button>
      </div>
    </div>
  );
};

export default FeaturedItems;
