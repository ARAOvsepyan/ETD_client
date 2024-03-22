import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Dashboard from "./pages/Dashboard";
import { ColorModeContext, useMode } from "./theme";

const App = () => {
  const [theme, colorMode] = useMode();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* <div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/help/:id" element={<Info />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
        {/* </div> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
