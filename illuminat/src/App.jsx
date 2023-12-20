import './App.css'
import React from 'react'
import Kissa_copressori from './componen/ei_componen2/Kissa_copressori';
import Roblox_TM from './componen/roblox_TM/roblox_TM';






import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Kopis from './componen/koppi';

export default function App (){
  return(
    <Router>
     <div>
      <nav>
        <ul>
          <li> 

            <Link to="/">Kopis</Link>
            
          </li>

          <li>

            <Link to="/Kissa_copressori">Update fire wall</Link>
            </li>
            <li>

            <Link to="/Roblox_TM">Roblex</Link>
            </li>




        </ul>
      </nav>

     </div>
     <Routes>
      <Route path="/" element={<Kopis />}>
        </Route>
      <Route path="/Kissa_copressori" element={<Kissa_copressori />}>

        
      </Route>
      <Route path="/Roblox_TM" element={<Roblox_TM />}>

        
      </Route>
     </Routes>

    </Router>
  );

}