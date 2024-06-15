import React from 'react';
import ReactDOM from 'react-dom/client';
 
import App from './App';
import WebContent from './WebContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <WebContent>
   <App />
   </WebContent>
  </React.StrictMode>
);
 
