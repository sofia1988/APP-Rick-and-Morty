import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(//inyecta el componente app  en ese elemento del html
  <React.StrictMode>
    
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  </React.StrictMode>
);// el browser hace que lo componentes sean navegables


