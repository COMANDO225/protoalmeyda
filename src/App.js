import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar'
import MainWrapper from './components/main/MainWrapper';
import SobreMi from './components/sections/sobreMi/SobreMi';

function App() {

  return (
    <div className="React-App">

      <Navbar/>
      <Header/>
      <MainWrapper>
        <SobreMi/>
      </MainWrapper>

    </div>
  );
}

export default App;
