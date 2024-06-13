import React from 'react';
import './App.css';
import IndexPage from './Landing/Landing'
import PrayLanading from './Pray/PrayLanding.js'
import PrayInsert from './Pray/PrayInsert.js'

import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'


function App() {

  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/PrayLanding" element={<PrayLanading />}></Route>
        <Route path="/PrayInsert" element={<PrayInsert />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
