import React from "react";
import { Link ,NavLink,useNavigate } from 'react-router-dom';

//Link over ancher tag'a'
//if we use the a tag when we will click it will be default reloads the whole page
//but Link will reloads only the component

//NavLink over Link
//it will provide a active class which route we are using currently
//so using that class we can hightlight the that nav item

const NavBar = ()=>{
    const navigate = useNavigate();

    return(
        <>
            <h1>Navigation using NavLink,Link,ancher-tag</h1>
            <nav>
                {/* <Link className="link-tag" to="/">Home</Link>
                <Link className="link-tag" to="/about">About</Link>
                <Link className="link-tag" to="/contact">Contact me</Link>
                <Link className="link-tag" to="/blog">Blog</Link> */}

                
                <NavLink className="link-tag" to="/">Home</NavLink>
                <NavLink className="link-tag" to="/about">About</NavLink>
                <NavLink className="link-tag" to="/contact">Contact me</NavLink>
                <NavLink className="link-tag" to="/blog">Blog</NavLink>
            </nav>
            <h1>Navigation using event</h1>
            <div className="btn-container">
                <button onClick={()=>navigate('/')} >Home</button>
                <button onClick={()=>navigate('/about')}>About</button>
                <button onClick={()=>navigate('/contact')}>Contact me</button>
                <button onClick={()=>navigate('/blog')}>Blog</button>
            </div>
        </>
    )
}

export default NavBar;