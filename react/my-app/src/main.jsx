import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './Learning/day-5/store.js'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App/>
</Provider>
    

  </StrictMode>,
)
