import styled from "styled-components";
import Business from "./Pages/Business";
import Company from "./Pages/Company";
import Personal from "./Pages/Personal";
import Header from "./Static/Header";
import Footer from "./Static/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () =>{
    return(

        <div>

          <BrowserRouter>

              <Header/>

                <Routes>
                  
                  <Route path="/" element={<Business/>}/>

                  <Route path="/Company" element={<Company/>}/>

                  <Route path="/Personal" element={<Personal/>}/>

                </Routes>

              <Footer/>

          </BrowserRouter>

        </div>

    );
};

export default App;
