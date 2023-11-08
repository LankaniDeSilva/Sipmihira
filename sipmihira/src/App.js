import './App.css';
import { Footer, AboutUs, Possibility, Downloads, WhatGPT3, Header, 
  LiteratureSurvey, ResearchGap , ResearchProblem, ResearchObjectives, Methodology } from './containers';
import { CTA, Brand, Navbar, ContactUs} from './components';

function App() {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <LiteratureSurvey />
    <ResearchGap/>
    <ResearchProblem/>
    <ResearchObjectives/>
    <Methodology/>
    <Brand />
    <WhatGPT3 />
    <Downloads />
    <Possibility />
    <CTA />
    <AboutUs />
    <ContactUs />
    <Footer />
  </div>
  );
}

export default App; 
