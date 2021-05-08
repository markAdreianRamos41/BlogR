import React, { useState } from 'react'


///DESKTOP STYLES
const setheightPadding = {
    height: '100%',
    padding: '35px 0px'
}
const hoveredMenu = {
    color: '#fff',
    textDecorationLine: 'underline',
    textDecorationThickness: '2px'
}
const setVisible = {
    visibility: 'visible',
    opacity: '1',
}
const rotateArrow = {
    transform: 'rotate(180deg)'
}


///MOBILE STYLES
const setSubMenuStyle = {
    padding: '29px 0px',
    height: '100%'
}

const setPStylesMobile = {
    display: 'block',
    opacity: '1'
}
const addPadding = {
    padding: '10px 24px'
}
const setMenuColor = {
    color: 'hsla(208, 49%, 24%, 0.8)'
}

const NavItem = ({items, design, index}) => {
    
    const [isHovered, setIsHovered] = useState(false)
    const [menuSelected, setMenuSeleted] = useState(false)


    function handleMouseEnter(){
        setIsHovered(prevState => prevState = true)
    }

    function handleMouseLeave(){
        setIsHovered(prevState => prevState = false)
    }
    
    function handleClickOpen(){
        setMenuSeleted(prevState => prevState = true)
    }
    function handleClickClose(){
        setMenuSeleted(prevState => prevState = false)
    }

    return(
        <div  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="nav-item" key={items[0]}>
            <div onClick={menuSelected ? handleClickClose : handleClickOpen}  className="main-item-sub-menu">
                <p style={isHovered && design === 'desktop' ? hoveredMenu : menuSelected && design === 'mobile' ? setMenuColor : null}key={items[0]}>
                    {items[0]}
                </p>
                <div style={isHovered && design === 'desktop' ? rotateArrow : menuSelected && design === 'mobile' ? rotateArrow : null} className="mobile-nav-arrow-svg"></div>
            </div>

            <div style={menuSelected && design === 'mobile' ? addPadding : null} className="sub-menu-container">
                <div style={isHovered && design === 'desktop' ? setheightPadding : menuSelected && design === 'mobile' ? setSubMenuStyle : null} className="sub-menu" >
                {
                    items[1].map(subItem => 
                        <p style={isHovered && design === 'desktop' ? setVisible : menuSelected && design === 'mobile' ? setPStylesMobile : null}key={subItem}>{subItem}</p> 
                    )    
                }
                </div>   
            </div>
        </div>
    )
    
}


export default NavItem
