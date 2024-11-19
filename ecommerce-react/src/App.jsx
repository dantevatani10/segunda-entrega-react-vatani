import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar1 from './components/layouts/navbar/Navbar'
import ItemListContainer from './components/pages/itemlistcontainer/ItemListContainer';
import ItemDetail from './components/pages/itemDetail/ItemDetail';


function App() {
  return (
    <BrowserRouter>
      <Navbar1 />
      <Routes>
        {/* RUTAS  */}
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
