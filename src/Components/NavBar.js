import React from "react";
import { Link } from 'react-router-dom';

const NavBar = ()=>{

    return(
        <nav>
            <Link className="link-tag" to="/">Home</Link>
            <Link className="link-tag" to="/about">About</Link>
            <Link className="link-tag" to="/contact">Contact me</Link>
            <Link className="link-tag" to="/blog">Blog</Link>
        </nav>
    )
}

export default NavBar;