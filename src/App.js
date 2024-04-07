import React, { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import InvoiceTemp1 from './pages/invoiceTemp1';



function App() {
  
  

  return (
    <div>
      <Routes>
        <Route path='' element={<LandingPage/>}/>
        <Route path='/template1' element={<InvoiceTemp1/>}/>

      </Routes>
    </div>
     );
}

export default App;
