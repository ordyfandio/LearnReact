import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
              <Link to="/">Home</Link>
              <Link to ="/create">Services</Link>
              <Link to="/">About Us</Link>
            </div>
        </nav> 
    );
}
 
export default Navbar;