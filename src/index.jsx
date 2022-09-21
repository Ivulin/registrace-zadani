import React from 'react';
import { createRoot } from 'react-dom/client';
import Registration from './components/Registration';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>REGISTRATION</h1>
      </header>
      <main>
        <Registration/>
      </main>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
