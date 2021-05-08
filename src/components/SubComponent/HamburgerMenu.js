import React, { useState } from 'react'

const spanOne = {transform: "rotate(45deg)"}
const spanTwo = {opacity: "0"}
const spanThree = {transform: "rotate(-45deg)"}

const HamburgerMenu = () => {
 
    const [state, setState] = useState(false)
    function handleClick(){
        if(state === false) {
            setState(prevState => prevState = true)
            document.querySelector(".mobile-navbar-container").classList.add("visible")
        }
        else {
            setState(prevState => prevState = false)
            document.querySelector(".mobile-navbar-container").classList.remove("visible")
        }
    }
    
    
   
    return (
        <div className="hamburger-menu hide-for-desktop" onClick={handleClick}>
            <span style={ state ? spanOne : null}></span>
            <span style={ state ? spanTwo : null}></span>
            <span style={ state ? spanThree : null}></span>
        </div>
    )
}
export default HamburgerMenu