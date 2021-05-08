import React from 'react' 
import FirstSection from '../SubComponent/MainContent/FirstSection'
import SecondSection from '../SubComponent/MainContent/SecondSection'
import ThirdSection from '../SubComponent/MainContent/ThirdSection'
const MainContent = () => {
    return (
        <div className="main-content-inner-wrapper">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </div>
    )
}

export default MainContent