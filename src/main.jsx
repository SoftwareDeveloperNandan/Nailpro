import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='bg-white text-black dark:bg-inherit dark:text-white'>
    <App />
    </div>
  </BrowserRouter>
)
