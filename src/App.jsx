/* eslint-disable no-unused-vars */

import "./styles.css"
import Navbar from "./navbar";
import Home from "./Home";
import Form from "./form";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";


function App(){
  //  const title='Welcome to the new blog';
  //  const like=50;
  //  const linkFace="http://www.google.com";

   return (
    <Router>
      <div className="App">
      <Navbar/>
       <div className="content">
        <Route exact path="/">
            <Home/>
        </Route>
        <Route  path="/Create">
          <Create/>
        </Route>
        <Route  path="/blog/:id">
          <BlogDetails/>
        </Route>
        {/* <h1>{title}</h1>
        <p>Liked{like} time</p>
        <a href={linkFace}>Google</a> */}
      </div>
      {/* <Form/> */}
    </div> 
    </Router>
   );

}

export default App