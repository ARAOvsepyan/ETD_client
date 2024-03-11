import { ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Ability from "./pages/Ability";
import Home from "./pages/Home";
import Swap from "./pages/Swap";
import Tarifs from "./pages/Tarifs";
import { ColorModeContext, useMode } from "./theme";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* <div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/ability" element={<Ability />} />
          <Route path="*" element={<Home />} />
        </Routes>
        {/* </div> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
