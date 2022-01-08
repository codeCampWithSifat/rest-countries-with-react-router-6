import Home from './Component/Home/Home';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';
import CountryDetail from './Component/CountryDetail/CountryDetail';
function App() {
 
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path="/" element ={<Home/>} />
         <Route path="/home" element ={<Home/>} />
         <Route path = "/country/:alpha2Code" element ={<CountryDetail/>}/>
         <Route path ="*" element ={<NoMatch/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
