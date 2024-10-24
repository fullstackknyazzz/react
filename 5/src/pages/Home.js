import React from 'react';
import FeaturedItems from '../components/FeaturedItems';

import man_with_kurtka from '../images/man_with_kurtka.png';
import brand from '../images/Brand.png';

import for_woman from '../images/1-for women.png';
import for_men from '../images/2-for men.jpg';
import for_kids from '../images/3-for kids.png';
import ACCESORIES_mini from '../images/4-ACCESORIES-mini.png';
import ACCESORIES from '../images/4-ACCESORIES.png';

const Home = () => {
  return (
    <main>
      <div className="container-color">
        <div className="container-big">
          <div className="general-block">
            <div className="block-left">
              <img src={man_with_kurtka} alt="Man" className="block-left__man-image" />
            </div>
            <div className="block-right">
              <img src={brand} alt="Brand" className="block-right__brand-image" />
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="category-block">
          <div class="category-block__top">
            <div class="category-block__top-image">
              <img src={for_woman} alt="" className="category-block__image" />
            </div>
            <div class="category-block__top-image">
              <img src={for_men} alt="" className="category-block__image" />
            </div>
            <div class="category-block__top-image-margin">
              <img src={for_kids} alt="" className="category-block__image" />
            </div>
            <div class="category-block__top-image-mini">
              <img src={ACCESORIES_mini} alt="" className="category-block__image" />
            </div>
          </div>
          <div class="category-block__bottom">
            <div class="category-block__bottom-image">
              <img src={ACCESORIES} alt="" className="category-block__image-accesories" />
            </div>
          </div>
        </div>
        <FeaturedItems />
      </div>
    </main>
  );
};

export default Home;
