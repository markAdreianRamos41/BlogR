import React from 'react'

const Buttons = ({classification ,buttonOne, buttonTwo}) => {
    return (
        <div className={classification}>
            <div className="buttons-container">
                <button>{buttonOne}</button>
                <button>{buttonTwo}</button>
            </div>
        </div>
    )
}


export default Buttons
