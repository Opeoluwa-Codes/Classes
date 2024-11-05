import { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage"
import SignIn from "./Pages/SignIn";

const App = () =>{

  return(
    
      <div>

        <BrowserRouter>

          <Routes>

            <Route path="/" element={<HomePage/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>

          </Routes>
        
        </BrowserRouter>
          
      </div>

  );

};

export default App;