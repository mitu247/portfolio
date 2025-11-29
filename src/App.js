import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Research from './components/Research';
import Interests from './components/Interests';
import CV from './components/CV';
import Updates from './components/Updates';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        <Bio />
        <Projects />
        <Research />
        <Interests />
        <CV />
        <Updates />
      </main>
      <Footer />
    </div>
  );
}

export default App;
