import "./scss/App.scss";
import Header from'./components/RootComponent/Header'
import HeroSection from "./components/RootComponent/HeroSection";
import Footer from "./components/RootComponent/Footer";
import MainContent from "./components/RootComponent/MainContent";

const App = () => {
  return (
    <div className="App">
      <div className="main-content-wrapper">
        <div className="header-hero-section">
          <div className="background-placeholder">
            <div className="header-container">
              <Header />
            </div>    
            <div className="hero-section df-jc-c-ai-c">
              <HeroSection />
            </div>
          </div> 
        </div>
        <div className="main-content-container">
          <MainContent />
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div> 
    </div>
  )
}

export default App;
