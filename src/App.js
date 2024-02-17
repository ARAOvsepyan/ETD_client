import React from 'react'
import Header from './Components/Header';
import Nav from './Components/Nav';
import AbilityList from './Components/AbilityList';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <AbilityList/>
      <AbilityList/>
      <AbilityList/>

    </div>
  );
}

export default App;
