import React from 'react'

const Paragraph = ({titleOne, titleTwo, paragraph}) => {
    return (
        <div className="paragraph">
            <div className="title">
                <h2>{titleOne}</h2>
                <h2>{titleTwo}</h2>
            </div>
                <p>{paragraph}</p>
        </div>
    )
}

export default Paragraph
