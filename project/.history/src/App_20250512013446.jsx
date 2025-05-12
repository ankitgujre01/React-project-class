import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home'
import SweetDryFruit from './pages/sweets and dry fruits/SweetDryFruit';

import Stationary from './pages/stationary/Stationary';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='sweets-and-dry-fruits' element={<SweetDryFruit />} />
            <Route path='stationary' element={<Stationary/>} />
            <Route parth
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;