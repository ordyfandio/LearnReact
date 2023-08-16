/* eslint-disable no-unused-vars */

import "./styles.css"
import Navbar from "./navbar";
import Home from "./Home";
import Form from "./form";


function App(){
   const title='Welcome to the new blog';
   const like=50;
   const linkFace="http://www.google.com";

   return (
    
    <div className="App">
      <Navbar/>
       <div className="content">
       <Home/>
        <h1>{title}</h1>
        <p>Liked{like} time</p>
        <a href={linkFace}>Google</a>
      </div>
      <Form/>
    </div> 
   );

}

export default App