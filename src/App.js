import React from 'react'
import Header from './Components/Header';
import Nav from './Components/Nav';
import AbilityList from './Components/AbilityList';
import Contacts from './Components/Contacts';
import Tarif from './Components/Tarif';
import ScrollToTop from 'react-scroll-to-top';

function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <AbilityList/>
      <Tarif/>
      <Contacts/>
      <ScrollToTop smooth component={<div></div>}/>
    </div>
  );
}

export default App;
