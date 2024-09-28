import React from 'react';
import Message from './Message'; // Импортируем наш компонент
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <Message text="Hello, this is a message passed via props!" />
    </div>
  );
}

export default App;
