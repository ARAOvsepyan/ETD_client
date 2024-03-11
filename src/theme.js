import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            // palette values for dark mode
            primary: {
              main: '#e67300',
            },
            secondary: {
              main: '#000000',
            },
            accent: {
              main: '#020024',
            },
            background: {
              main: '#ffffff',
              default: '#f5f6f9',
            },
            text: {
              main: '#000000'
            }
          }
        : {
            // palette values for light mode
            primary: {
              main: '#ff8c1a',
            },
            secondary: {
              main: '#ffffff',
            },
            accent: {
              main: '#dddbff',
            },
            background: {
              main: '#000000',
              default: '#141F2D',
            },
            text: {
              main: '#ffffff'
            }
          }),
    },
    typography: {
      fontFamily: "Montserrat, sans-serif",
      htmlFontSize: 16,
      fontSize: 16,
      fontWeight: 400,
      caption: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "0.8rem",
        fontWeight: 400,
      },
      body2: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "0.95rem",
        fontWeight: 400,
      },
      body1: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "1.15rem",
        fontWeight: 400,
        lineHeight: 1.2,
      },
      h6: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "1.25rem",
        fontWeight: 400,
        lineHeight: 1.2,
      },
      h5: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "1.35rem",
        fontWeight: 400,
        lineHeight: 1.2,
      },
      h4: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "1.75rem",
        fontWeight: 400,
        lineHeight: 1.2,
      },
      h3: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "2.2rem",
        fontWeight: 400,
        lineHeight: 1.2,
      },
      h2: {
        fontFamily: "Dela Gothic One, san-serif",
        fontSize: "3rem",
        fontWeight: 400,
        lineHeight: 1.2,
      },
      h1: {
        fontFamily: "Dela Gothic One, san-serif",
        fontSize: "4rem",
        fontWeight: 400,
        lineHeight: 1.2,
      },
      button: {
        textTransform: "none",
      },
    }
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};