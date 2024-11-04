import { useState } from 'react'
import Homepage from './Pages/Homepage';
import About from "./Pages/About"
import Form from "./Components/Form"
import Business from "./Pages/Business"
import Company from "./Pages/Company"
import Personal from "./Pages/Personal"
import Blog from "./Pages/Blog"
import GrandParent from './Pages/Props/Grandparent';
import {gift} from "./Pages/Context/GiftContext"
import GP from "./Pages/Context/GP"
import Black from "./Pages/Classwork/Black"
import {Color} from "./Pages/Classwork/CreateContext"
import CompOne from './Pages/Classwork/CompOne';
import { BrowserRouter, Routes, Route} from "react-router-dom";


const App = () =>{
  return(
    <Color.Provider value={<Black/>}>
      {/* you can put another provider under..as long as it wraps everything*/}
      
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
            <Route path="/GrandParent" element={<GrandParent/>}/>
            <Route path="/GP" element={<GP/>}/>
            <Route path="/CompOne" element={<CompOne/>}/>

            </Routes>

          </BrowserRouter>

        </div>
    </Color.Provider>
  
  );
};

export default App;