import './App.css';
import { Footer, Blog, Possibility, Downloads, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar, ContactUs } from './components';

function App() {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Downloads />
    <Possibility />
    <CTA />
    <Blog />
    <ContactUs />
    <Footer />
  </div>
  );
}

export default App;
