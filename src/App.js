import React from 'react'
import Header from './Components/Header';
import Nav from './Components/Nav';
import AbilityList from './Components/AbilityList';
import Contacts from './Components/Contacts';
import Tarif from './Components/Tarif';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <AbilityList/>
      <Tarif/>
      <Contacts/>
    </div>
  );
}

export default App;
