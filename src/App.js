import { BrowserRouter } from "react-router-dom";
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
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
