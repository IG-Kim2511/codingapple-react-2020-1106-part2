import logo from './logo.svg';
import './App.css';

import react, {useState} from 'react';

import { Navbar , Nav ,NavDropdown , Form , FormControl, Button, Jumbotron} from 'react-bootstrap';

import {  Link,Route } from "react-router-dom";


import Data21 from './Data21'

// 🦄24 lifecycle hook . useEffect
function App24(){
  let[shoes,shoesset]=useState(Data21);
  return(
    <div>
     <p className="black-nav">🦄</p> 
     <nav className="ig_nav">
     <Link to='/'>Home</Link>
     <Link to='/detail'>Detail</Link>
   </nav>
   
   <Route path="/">  </Route>

   <switch>
       👉🦄 Detail24_file.js  
       <Route path="/detail">
       
     </Route>   
   </switch>  
    </div>
  )

  componentdidmount()PageTransitionEve
  componentwillUnmount(){


    useEffect hook 
  }

}

function De24(props){

  useEffect(()=>{
    console.log('detail22');
  });

  useEffect(()=>{return function ddd(){}});


  useEffect( ()=>{
let timer = setTimeout( ()=> {} )

  }, 2000);


}

return (
<div>

</div>

)

//
function App55(){
  return(
    <div>
      <p className="black-nav">🦄</p> 
    </div>
  )

}

function App(){
  return(
    <div>    
        <App24/>          
       </div>     
       //  <App25/>    
       //  <App26/>    
       //  <App27/>    
       //  <App28/>    
       //  <App30/>    
       //  <App31/>    
       //  <App32/>    
       //  <App33/>    
       //  <App34/>    
       //  <App35/>   
       )
}

export default App;
