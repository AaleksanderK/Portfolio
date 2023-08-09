import React from 'react';
import { MainBackground } from './components/MainBackground/MainBackground';
import { Home } from './components/Home/Home';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import { Data } from './components/Projects/ProjectItem/constants';
 
 
function App() {
  return (
    <div className="App">
      <Header/>
      <MainBackground />
      <Home />
      <Skills/>
       <Projects data={Data}/>
      <Contact/>
     

    </div>
  );
}

export default App;
