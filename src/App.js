import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
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
      <Navbar />
      <div className="page-layout">
        <Sidebar />
        <main className="main-content">
          <Bio />
          <Projects />
          <Research />
          <Interests />
          <CV />
          <Updates />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
