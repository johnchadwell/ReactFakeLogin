import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { IoMenu } from "react-icons/io5";
import { FaUser, FaRegUser } from "react-icons/fa";
import './navbar.css'
import { MdBorderColor } from 'react-icons/md';

function Navbar() {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState ("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const { LoggedIn, logout } = useAuth();
    const [title, setTitle] = useState("My Site")


    const updateMenu = () => {
        console.log("isMenuClicked: " + isMenuClicked);
        if (!isMenuClicked) {
            // setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")

        } else {
            // setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    return (
    <div className="header">
        <nav>
            <div className='title'>
                {title}
            </div>
            <div className='nav-links'>

                {LoggedIn ? (<>
                <NavLink className="nav-btn show-nav-buttons" to={"/"}>Home</NavLink>
                <NavLink className="nav-btn show-nav-buttons" to={"/dashboard"}>Dashboard</NavLink>
                <NavLink className="nav-hover show-nav-buttons" to={"/logout"}><FaUser/></NavLink>
                <NavLink className="showmenu"  onClick={updateMenu}><IoMenu/></NavLink>
                </>
                ) : (<>
                {/* example setting isactive style inline */}
                <NavLink className="nav-btn show-nav-buttons" to={"/"}>Home</NavLink>
                <NavLink className="nav-btn show-nav-buttons" to={"/dashboard"}>Dashboard</NavLink>
                <NavLink className="nav-hover show-nav-buttons" to={"/login"}><FaRegUser/></NavLink>
                <NavLink className="showmenu" onClick={updateMenu}><IoMenu/></NavLink>
                </>
                )}


            </div>
        </nav>
    
        <div className={menu_class}>
            <div className='menu-links' onClick={updateMenu}>

                {LoggedIn ? (<>
                <NavLink className="" to={"/"}>Home</NavLink>
                <NavLink className="" to={"/dashboard"}>Dashboard</NavLink>
                <NavLink className="" to={"/logout"}>Logout</NavLink>
                </>
                ) : (<>
                <NavLink className="" to={"/"}>Home</NavLink>
                <NavLink className="" to={"/dashboard"}>Dashboard</NavLink>
                <NavLink className="" to={"/login"}>Login</NavLink>
                </>
                )}


            </div>
        </div>
    </div>
    
    
    )
}

export default Navbar


    //// example setting isactive style upfront instead of inline
    // const navBtnActive = ({ isActive }) => {
    //     return {
    //         color: isActive ? "#000" : "#fff",
    //         backgroundColor: isActive ? "#fff" : "#7600dc",
    //         fontWeight: isActive ? "bold" : "",
    //         border: isActive ? "2px solid red" : "1px solid yellow",
    //     };
    // };
    ////<NavLink style={navBtnActive} className="nav-btn show-nav-buttons" to={"/"}>Home</NavLink>

    //// example setting isactive style inline
    // <NavLink style={({ isActive }) => ({
    //     color: isActive ? '#000' : '#fff',
    //     background: isActive ? 'blue' : '#7600dc',
    //     })} className="nav-btn show-nav-buttons" to={"/"}>Home</NavLink>


