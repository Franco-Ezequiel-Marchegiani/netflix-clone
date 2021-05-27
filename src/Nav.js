import React, { useEffect, useState } from 'react'
import "./Nav.css";
function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() =>{
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100){
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeAddEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://logos-marcas.com/wp-content/uploads/2020/04/Netflix-Logo.png" alt="Netflix Logo"></img>
            <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Logo"></img>
        </div>
    )
}

export default Nav
