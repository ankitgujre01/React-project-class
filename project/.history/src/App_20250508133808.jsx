import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home'
import SweetDryFruit from './pages/sweets and dry fruits/SweetDryFruit';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='sweets-and-dry-fruits' element={<SweetDryFruit />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;