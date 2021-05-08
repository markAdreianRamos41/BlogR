import React from 'react'
import Logo from '../SubComponent/Logo'
import HamburgerMenu from '../SubComponent/HamburgerMenu'
import NavItems from '../SubComponent/NavItems'

const Header = () => {
    return (
        <>
            <header>
                <Logo classification="header-logo" />
                <HamburgerMenu />
                <NavItems displayedDesign="desktop" classification="desktop-navbar-container hide-for-mobile" buttonOne="Login" buttonTwo="Sign Up" />
            </header>
           
            <NavItems displayedDesign="mobile" classification="mobile-navbar-container df-fd-c-jc-c-ai-c hide-for-desktop" buttonOne="Login" buttonTwo="Sign Up"/>
        </>
    )
}

export default Header
