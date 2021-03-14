import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import './Nav.css'

function Nav() {
  const [show, handleShow]= useState(false)
  const history = useHistory()
  const transitionNavBar = () => {
     if (window.scrollY > 100) {
       handleShow(true);

     } else {
       handleShow(false)
     }
  }

  useEffect(() => {
    window.addEventListener("scroll",transitionNavBar)
    return() => window.removeEventListener("scroll",transitionNavBar)
  },[]);


    return  < div className={`nav ${show&&"nav_black"}`}>
        < div className="nav_contents">

        <img 
        onClick={() => history.push("/")}
        className="nav_logo"
        src= "https://play-lh.googleusercontent.com/384jx3OL4_tqtCGZrfIB6Q5TehM0Q7TLYFsenRPfeT8f-3vicWH2BYbvaEAneaPFMMM" alt="" />

       
        <img
        onClick={() => history.push("/profile")}
        className="nav_avatar"
      src= "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />


        </div>
        </div>
    
}
export default Nav