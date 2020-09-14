//index.jx
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import  {BrowserRouter} from "react-router-dom";
import "./index.css";


ReactDOM.render(
    <>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </>,document.getElementById("root")
);

*/






//navbar.jsx

/*
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar=()=>{
   return (

    <>
    
    <div className="container-fluid">

    <div className="row">
    <div className="col-10 mx-auto">
    <nav className="navbar navbar-expand-lg  ">
  <NavLink className="navbar-brand" to="#">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li  className="nav-item ">
        <NavLink Exact  activeClassName="active_class" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink  Exact  activeClassName="active_class" className="nav-link" to="/About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink Exact  activeClassName="active_class" className="nav-link" to ="/Service">Service</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink Exact activeClassName="active_class" className="nav-link" to ="/Contact">Contact</NavLink>
      </li>
      
    
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

    </div>
    </div>
    </div>



    </>




   );




}
export default  Navbar;
*/


//---------------home.jsx------------------
/*
import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';
const imgsrc="https://images.pexels.com/photos/904524/pexels-photo-904524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const imgsrc2="https://media.istockphoto.com/photos/easter-eggs-isolated-on-white-picture-id1169552424";
const Home=()=>{
    return(

        <>

            
           <Common links="/About" head2="We are the best web developre" p="i am student &&  web developer" sp="myname"name="Get started with  suva"imgsrc={imgsrc} visit="Service" btname="Get started"/>
              
              

        </>
    );
}
export default Home;

*/



//----------------------about------------------
/*
import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';
const imgsrc="https://images.pexels.com/photos/904524/pexels-photo-904524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const imgsrc2="https://media.istockphoto.com/photos/easter-eggs-isolated-on-white-picture-id1169552424";
const About=()=>{
    return(

        <>
        <h1 className="text-center">About section</h1>
        <Common  links="/Service"head2="We are the best web developre" p="i am student &&  web developer" sp="myname"name="Grow your bussieness"imgsrc={imgsrc} visit="Service" btname="Get started"/>

              

        </>
    );
}
export default About;


*/

//--------------------------service----------------
/*
import React from 'react';
const Service=()=>{
    return (
   <>
   <section className="service_section">

   <div className="text-center my-5">
   <div className="container my-5">
   <h1>our Service </h1>
   <p className="my-2">A card is a flexible and extensible content container. 
   It includes options for headers and footers,
    a wide variety of content, contextual background colors, 
    and powerful display options. If you’re familiar with Bootstrap 3</p>

    </div>
    <div className="row">
       <div className="col-10 mx-auto">
        <div className="row my-5">
           <div className="col-md-4 mx-auto">
           <div className="card_box my-5">
           <div class="card" >
  <img className="card-img-top" 
  src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
    </div>
     </div>
    </div>





<div className="col-md-4 mx-auto">
           <div className="card_box my-5">
           <div class="card" >
  <img className="card-img-top" src="https://images.pexels.com/photos/399161/pexels-photo-399161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
    </div>
 </div>
</div>



<div className="col-md-4 mx-auto">
           <div className="card_box my-5">
           <div class="card" >
  <img className="card-img-top"
   src="https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
    </div>
 </div>
</div>






<div className="col-md-4 mx-auto">
           <div className="card_box my-5">
           <div class="card" >
  <img className="card-img-top" 
  src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
   alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
    </div>
 </div>
</div>





<div className="col-md-4 mx-auto">
            <div className="card_box my-5">
                    <div class="card" >
                    <img className="card-img-top"
                    src="https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?
                        auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
            </div>
        </div>
</div>










<div className="col-md-4 mx-auto">
            <div className="card_box my-5">
                    <div class="card" >
                    <img className="card-img-top"
                    src="https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?
                        auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
            </div>
        </div>
</div>
















   </div>


   </div>
   </div>
   </div>


   </section>



   </>



    );
}
export default Service;
*/


//footer-------------------------
/*
import React from 'react';
const Footer=()=>{

return (
   <>
   <footer className="foot bg-primary my-5 text-center">
   <div className="footer_box ">
   <p>Hope you like the page </p>
   <p>for more stay with us</p>



   </div>



   </footer>



   </>
);

}
export default Footer;
*/

//contact--------------------
/*
import React from 'react';
const Contact=()=>{
    return (
   <>
      <section className="contactpage my-5 text-center">
      <h1 className="my-4">Contact</h1>
      <div className="container">
      <div className="box">
             <div className="from_box my-5">
             
             <form className="my-5 w-80 mx-auto">
             <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword" placeholder="Enter your name"/>
    </div>
  </div>



  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputPassword" placeholder="Enter your email"/>
    </div>
  </div>
 


  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
    </div>
  </div>



  



  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password2</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="check password"/>
    </div>
  </div>


  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>




</form>
             </div>


      </div>



      </div>



      </section>




   </>



    );
}
export default Contact;
*/




//-------------------------css------------------------
/**{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    
}
.Navbar{

    background-color:#fff !important;
    

}
.active_class:hover{
    border-bottom: 1px solid crimson;
    color: darkturquoise  !important;
}

strong{
    color: aquamarine;
}
span{
    color: aquamarine;
}

.box h1{
    letter-spacing: 3px;
    word-spacing: 3px;
    line-height: 75px;
    font-size: 45px;
    font-weight: 700;

}
.box h2{
    color: aquamarine;
}

.box p{
    padding: 20px 0;
}
.bt1{
    padding: 10px 30px ;
    font-size: 16px;
    text-align: center;
    background-color:aquamarin ;
    margin: 40px 0;
}
img{
    width: 100% ;
    height: 100%;
}
.btn{
    border-radius: 10px;
}*/


//---------------app--------------------
/*
import Home  from "./Home";
import Service  from "./Service";
import About   from "./About";
import Contact  from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Switch,Route, Redirect} from "react-router-dom";

const App=()=>{
    return (
        <>
        <Navbar/>

         <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/Service" component={Service}/>
             <Route exact path="/About" component={About}/>
             <Route exact path="/Contact" component={Contact}/>
             <Redirect to="/" />
             
         </Switch>
         <Service/>
         <About/>
         <Contact/>
         <Footer/>
      

        </>




    );
}
export default App;




*/


/*

import React from 'react';


const imgsrc="https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
const Common=(props)=>{
    return (

        <>

        <section className="home">
                 <div className='container-fluid my-5'>
                     <div className="row my-5">
                     <div className="container-fluid my-5">
                        <div className="col-10 mx-auto">
                        <div className='row'>
                        <div className="col-5 my-5">
                          <h1>{Props.title} <span>{Props.sp}</span> </h1>
                             <h2>{Props.sub}</h2>
                             <p>{Props.p} </p>
                             <button className="btn btn-outline-info">{Props.link}</button>
                          <p></p>

                        </div>

                        <div className="col-7 ">
                        <img src={props.imgsrc}alt="noy found" className="img-fluid"/>



                        </div>
                        </div>



                        </div>


                 </div>



             </div>


             </div>



        </section>




        </>



    );
    
    
    
}
export default Common;



*/
//2nd project
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./App";
// import { BrowserRouter } from 'react-router-dom';
// import "./index.css";



// ReactDOM.render(
//     <>

//    <BrowserRouter>
//    <App/>
//    </BrowserRouter>
//    </>
    
//     ,document.getElementById("root")

    
// );

//end of index .js--------------------->
//--------------------><----------------------------------->
//start of app

// import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import About from "./About";
// import Service from "./Service";
// import Contact from "./Contact";
// import Home from "./Home";
// import Navbar from "./Navbar";

// const App=()=>{

//     return (
//       <>
//       <Navbar/>
//     <Switch>
//         <Route exact path="/"  component={Home}/>
//         <Route exact path="/About"  component={About}/>
//         <Route exact path="/Service"  component={Service}/>
//         <Route exact path="/Contact"  component={Contact}/>
//         <Redirect to={Error}/>
        
//     </Switch>


//     </>
//     );
// }
// export default App;
//-------------------------->end of app<-----------------------

// //csss

// *{
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: 'Montserrat', sans-serif;
// }
// .active_class:hover{
//   color: chartreuse;
//   border-bottom: 2px solid cyan;

// }
// .about{
//   padding: 100px;
//   background-color: aquamarine
// }
// .Footer{
// background-color:aquamarine;
// }
// .Footer input{
//   width: 60%;
// }
// .head{
//   height: 100vh;
//   width: 100vw;
//   background-image: url(https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
//   background-position:center;
//   background-size:cover;
//   color: #fff;
// }
// .bg_color{
//   background-color:#f5e1ff;
// }
// .head .col-md-6{
//   padding-top: 200px;
// }
// .Footer h1{
//   padding: 40px 0;
// }
// .time{
//   background-color: #fff;
//   padding: 10px 30px;
//   color: black;
//   text-align: center;

// }
// .setc{
//   color:cyan;










//

//form-------------------------------------------************************

// class Contact extends Component{


//   constructor(props){

//     super();
//     this.state={
//       name:"",
//       phone:"",
//       email:"",
//       password:"",
//       text:"",
//       check:''



//     }
//   }

  // InputEventName=(e)=>{
  //   const data=e.target.value;
  //   this.setState({
  //     name:e.target.value })

  // }
  // InputEventPhone=(e)=>{
  //   const data=e.target.value;
  //   this.setState({
  //     phone:e.target.value })

  // }
  // InputEventEmail=(e)=>{
  //   const data=e.target.value;
  //   this.setState({
  //     email:e.target.value })

  // }
  // InputEventPass=(e)=>{
  //   const data=e.target.value;
  //   this.setState({
  //     password:e.target.value })

  // }

  // InputEventText=(e)=>{
  //   const data=e.target.value;
  //   this.setState({
  //     text:e.target.value })

  // }


// InputEvent=(e)=>{
//   this.setState({[e.target.name]:[e.target.value]})
// }

//   onSubmits=(e)=>{
//    //
//    // alert(`my name is ${this.state.name} and phone no ${this.state.phone} and email${this.state.email}`)
//    alert(JSON.stringify(this.state));
//     e.PreventDefault();

//   }
  

//   render(){


//     return (
//            <>

//            <section className="contact">
//            <h1 className="text-center">contact</h1>
//             <div className="container   my_form">
//             <form className="w-50 mx-auto" onSubmit={this.onSubmits}>

//             <div className="form-group">
//     <label for="exampleInputPassword1">name</label>
//     <input onChange={this.InputEvent} value={this.state.name} name="name" type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter your name"/>
//   </div>
//   <div className="form-group">
//     <label for="exampleInputPassword1">Phone no</label>
//     <input onChange={this.InputEvent} value={this.state.phone} name="phone"type="text" className="form-control" id="exampleInputPassword1" placeholder="Phone no"/>
//   </div>




//   <div className="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input onChange={this.InputEvent} value={this.state.email} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div className="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input onChange={this.InputEvent} value={this.state.password} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
//   </div>

//   <div className="form-group">
//     <label for="exampleFormControlTextarea1">Example textarea</label>
//     <textarea onChange={this.InputEvent} value={this.state.text}name="text" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//   </div>
//   <div className="form-check">
//     <input onChange={this.InputEvent} value={this.state.check} name="check" type="checkbox" className="form-check-input" id="exampleCheck1"/>
//     <label className="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button value="submit" type="submit" className="btn btn-primary">Submit</button>
// </form>

//             </div>


//            </section>

//            </>






//************************************************************************ */
        
            //2nd web page

//Navabr
 

//************************************** */

//



//*************************************************** */
// //appp.jsx

 


//************************************ */
//index.jsx

 

// );
//88888888888888888888888888

// import React,{useState,useEffect} from 'react';
// import Axios from 'axios';


// const App=()=>{

//   const [num,setNum]=useState();
//   const [name,setName]=useState();
//   const [moves,setMoves]=useState();




//   useEffect(()=>{

// async function getData(){
//   const res=await Axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
//   setName(res.data.name);
//   setMoves(res.data.moves.length );
// }

// getData();

//   });
 

//   return (
// <>
// <h1>you choice{num}</h1>

// <h1>your pokomon is:={name}</h1>
// <h1>your pokomon moves:={moves}</h1>
// <select value={num} onChange={(event)=>{
//   setNum(event.target.value);
  
//   }}>
// <option value="1">1</option>
// <option value="25">25</option>
// <option value="3">3</option>
// <option value="5">5</option>
// <option value="6">6</option>



// </select>



// </>


//   );
// }
// export default App;





















