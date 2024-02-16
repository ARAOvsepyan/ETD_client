import React, {useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar'
import AppRouter from "./components/AppRouter";
import WebFont from 'webfontloader'

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Dela Gothic One']
      }
    });
  }, []);


  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
