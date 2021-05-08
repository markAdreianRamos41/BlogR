import React from 'react'
import Buttons from './Buttons'
import NavItem from './NavItem'


const items = [
    ['Product', ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations']],
    ['Company', ['About', 'Team', 'Blog', 'Careers']],
    ['Connect', ['Contact', 'Newsletter', 'LinkedIn']]
]


const NavItems = ({classification, buttonOne, buttonTwo, displayedDesign}) => {

    return (
        <div className={classification}>
            <div className="nav-item-container">
                <div className="nav-options-container">
                    <NavItem items={items[0]} index={0} design={displayedDesign}/> 
                    <NavItem items={items[1]} index={1} design={displayedDesign}/> 
                    <NavItem items={items[2]} index={2} design={displayedDesign}/>                 
                </div>
                <Buttons classification="nav-bar-buttons" buttonOne={buttonOne} buttonTwo={buttonTwo}/>
            </div>
           
        </div>
    )
}

export default NavItems
