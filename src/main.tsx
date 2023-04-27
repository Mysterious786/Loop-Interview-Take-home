import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import WrappedApp from './App';


import './index.scss'
import {BrowserRouter} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <BrowserRouter>
     <WrappedApp />
     </BrowserRouter>

  </React.StrictMode>,
)
