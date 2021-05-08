import React from 'react'
import Logo from '../SubComponent/Logo'
import NavItems from '../SubComponent/NavItems'

const Footer = () => {
    return (
        <footer>
            <Logo classification="footer-logo" />
            <NavItems classification="footer-navbar-container"/>
        </footer>
    )
}

export default Footer