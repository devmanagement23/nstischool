import './App.css';
import React from 'react'
import Navbar from './components/NavbarComponent';
import TextFormComponent from './components/TextFormComponent';

function App() {
  return (
    <>
    
      <Navbar title="TextEditoR" abouttext="About-us"/>
      <div className='container my-3'>
      <TextFormComponent heading="Enter text to edit"/>
      </div>
      

    </>
    
  );
}

export default App;
