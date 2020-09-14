import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const imsrc="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";

const App=(props)=>{

  return (
<>
 
<div className="card">
  <img   className="card-img-top  img-fluid" src={props.imsrc} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.p}.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

</>


  );
}
export default App;



