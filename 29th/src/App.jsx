import { useState } from 'react'
import Homepage from './Pages/Homepage';
import About from "./Pages/About"
import Form from "./Components/Form"
import Business from "./Pages/Business"
import Company from "./Pages/Company"
import Personal from "./Pages/Personal"
import Blog from "./Pages/Blog"
import { BrowserRouter, Routes, Route} from "react-router-dom";


const App = () =>{
  return(
    <div>
      <BrowserRouter>

        <Routes>
          
        <Route path="/" element={<Homepage/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/Business" element={<Business/>}/>
        <Route path="/Company" element={<Company/>}/>
        <Route path="/Personal" element={<Personal/>}/>
        <Route path="/Blog" element={<Blog/>}/>


        </Routes>

      </BrowserRouter>

    </div>
  );
};

export default App;