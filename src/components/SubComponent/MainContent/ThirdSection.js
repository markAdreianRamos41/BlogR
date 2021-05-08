import React from 'react'
import Paragraph from './Paragraph'

const ThirdSection = () => {
    return (
        <div className="third-section">
            <div className="third-section-main-contents"> 
                <div className="third-section-contents">
                    <div className="image-mobile-placeholder hide-for-desktop"></div>
                    <div className="paragraphs">
                        <Paragraph 
                            titleOne="Free, open, simple" 
                            paragraph=" Blogr is a free and open source application]
                                        backed by a large community of helpful developers.
                                        It supports features such as code syntax highlighting, 
                                        RSS feeds, social media integration, third-party 
                                        commenting tools and works seamlessly with Google
                                        Analytics. THe architecture is clean and is relatively easy
                                        to learn."
                        />

                        <Paragraph 
                            titleOne="Powerful tooling" 
                            paragraph=" Batteries included. We built a simple and straight forward 
                                        CLI tool that makes customization and deployment a breeze,
                                        but capable of producing even the most complicated sites."
                        />

                    </div>  
                </div>   
            </div>
        </div>
    )
}

export default ThirdSection
