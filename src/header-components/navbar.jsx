import React from "react";
import "../header-components/navbar.css"
function Navbar(props) {
    return (
        <nav className="nav">
            <a href="#" className="nav_brand"> ❤️thecarspa </a>
           <ul className="nav_menu">
               <li className="nav_item"> <a href="#" className="nav_link">Home</a></li>
                <li className="nav_item"> <a href="#" className="nav_link">About</a></li>
                <li className="nav_item"> <a href="#" className="nav_link">contact us</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;