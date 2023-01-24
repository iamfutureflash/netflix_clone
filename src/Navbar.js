import React, { useState, useEffect } from 'react'
import "./Navbar.css"
function Navbar() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) handleShow(true);
            else handleShow(false);
        });
        // return () => {
        //     window.removeEventListener("scroll");
        // }; -->gives error when uncomment this line and on comment working smooth dny
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            <img className='nav__avatar' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2b%2F90%2F0d%2F2b900d5612554cd0b5edf7d8e848c3ea.png&f=1&nofb=1&ipt=10190069fbe884bebacbec7f286b382105c09615a763bcfe07ed0917e86ca688&ipo=images" alt="Netflix Logo" />
        </div>
    )
}

export default Navbar