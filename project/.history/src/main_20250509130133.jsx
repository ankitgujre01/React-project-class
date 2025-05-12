import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Provider from "@/components/ui/provider";

// import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import { Provider } from 'react-redux';
import store from './'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <Provider store={store}>
    <App />
  </Provider>
  
)
