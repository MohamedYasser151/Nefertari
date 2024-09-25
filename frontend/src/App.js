import React,{useState,useEffect, lazy, Suspense,startTransition } from 'react';

import { Routes,Route,BrowserRouter} from "react-router-dom";



// import Navbars from './component/Navbars';
// import Footer from './component/footer';


import Loading from './component/Loading.js';
import Nefertari from './component/Nefertari.js';

import './App.css';



const Home = lazy(()=> import('./component/Home.js'))
const Navbars = lazy(()=> import('./component/Navbars.js'))
const Footer = lazy(()=> import('./component/Footer.js'))







const App = ()=>{
  const [showNefertari, setShowNefertari] = useState(true);

  {useEffect(()=>{
    const timer = setTimeout(()=>{
      setShowNefertari(false)
    },4000)
  })}

  return (
    
    <BrowserRouter>
    
    <div className="App">
    
      
   
        <Routes>
      
        {/* <Route path="/" element={<Signin/>}/> */}
        <Route path="/" element={
           <React.Suspense fallback={<Loading/>}>
          

          {showNefertari ? (
         <Nefertari />
       ) : (
         <>
           <Navbars />
           <Home />
         </>
       )}


          </React.Suspense>
          }/>
        <Route path="/Nefertari" element={<Nefertari/> }/>
      

         {/* <Route path="*" element={
          <div>
          

         <NotFound/>
         </div>
         }/> */}
          
        

       
         
       

        


       

        </Routes>
        
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
