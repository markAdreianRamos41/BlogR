import React from 'react'
import Paragraph from './Paragraph'


const SecondSection = () => {
    return (
        <div className="second-section">
            <div className="background-image">
                <div className="second-section-image-holder"></div>
                <div className="paragraphs">
                    <Paragraph 
                         titleOne="State of The Art Infrastracture" 
                        paragraph=" With reliablity and speed in mind,
                                    worldwide data centers provide the 
                                    backbone for the ultra-fast connectivity.
                                    This ensures your site will load instantly,
                                    no matter where your readers are, keeping 
                                    your site competitive."
                     />
                </div>
            </div>
        </div>
    )
}

export default SecondSection
