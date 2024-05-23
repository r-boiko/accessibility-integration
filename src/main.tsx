import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import axe from 'react-axe'
import './index.css'

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
