import React from 'react'
import Paragraph from './Paragraph'

const FirstSection = () => {
    return (
        <div className="first-section">
            <h1>Designed for the future</h1>
            <div className="first-section-main-contents"> 
                <div className="image-mobile-placeholder hide-for-desktop"></div>
                <div className="paragraphs">
                    <Paragraph 
                        titleOne="Introducing an" 
                        titleTwo="extensible editor"
                        paragraph=" Blogr features and exceedingly intuitive interface
                                    which lets you focus on one thing: creating content.
                                    The editor supports the management of multiple blogs
                                    and allows easy manipulation of embeds such as images
                                    videos, and Markdowns. Extensibility with plugins and
                                    themes provide easy ways to add funtionality or change
                                    the looks of a blog. "
                    />

                    <Paragraph 
                        titleOne="Robust content" 
                        titleTwo=" management"
                        paragraph=" Flexible content managemet enables users to easily
                                    move through posts. Increase the usability of your blog
                                    by adding customized categories, section, format or flow. 
                                    With this functionality. you're in full control. "
                    />

                </div>     
            </div>
        </div>
    )
}

export default FirstSection
