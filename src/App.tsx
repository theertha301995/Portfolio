import React from 'react';
import Portfolio from './Component/photo'
import './App.css';
// import Portfolio from './Component/photo'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from './layout/layout';
import ContactForm from './contact/contact'
import ContactCard from './Contactlist/contactlist'





function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Portfolio />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/Contactlist" element={<ContactCard />} />
          </Route>
      </Routes>
    </BrowserRouter >
  </>



  );

}

export default App;
