import './App.css';
import {
  Footer, AboutUs, Possibility, Downloads, Header,
  LiteratureSurvey, ResearchGap, ResearchProblem, ResearchObjectives, Methodology, Technologies, Milestones
} from './containers';
import { Brand, Navbar, ContactUs } from './components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <LiteratureSurvey />
      <ResearchGap />
      <ResearchProblem />
      <ResearchObjectives />
      <Methodology />
      <Technologies />
      <Milestones />
      <Brand />
      <Downloads />
      <Possibility />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App; 
