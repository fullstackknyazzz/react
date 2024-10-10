// src/components/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <h1>О нас</h1>
      <p>Это страница О нас.</p>
      <Link to="/">Вернуться на Главную страницу</Link>
    </div>
  );
};

export default AboutPage;