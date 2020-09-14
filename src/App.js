import React from 'react';

 import Home from "./Home";
 import About from "./About";
 import Service from "./Service";
 import Review from "./Review";
 import Contact from "./Contact";
 import Navbar from "./Navbar";
 import Error from "./Error";
 import Footer from "./Footer";

 import { Switch,Route, Redirect } from 'react-router-dom';



 const App=()=>{

   return (
   <>

       <Navbar/>
      

       <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/About" component={About}/>

       <Route exact path="/Service" component={Service}/>

       <Route exact path="/Review" component={Review}/>

       <Route exact path="/Contact" component={Contact}/>
       <Redirect  to={Error}></Redirect>
      
        </Switch>
        




      


    </>
      


   );
 }
 export default App;
