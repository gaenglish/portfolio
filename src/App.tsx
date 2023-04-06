import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// @ts-ignore
import bg from "./assets/grid_0.png";
import { Resume } from "./pages/Resume";
import { NavBar } from "./components/navigation/NavBar";
import { DarkTheme, LightTheme } from "./themes";
import { Background, ThemeProvider } from "@uni-design-system/uni-react";

function App() {
  const [theme, setTheme] = useState(DarkTheme);
  const themes = { DarkTheme, LightTheme };

  const handleThemeChange = (themeName: string) => {
    // @ts-ignore
    setTheme(themes[themeName]);
  };

  return (
    // @ts-ignore
    <ThemeProvider theme={theme}>
      <Background
        imageUrl={bg}
        attachment="fixed"
        position="center"
        size="cover"
        minHeight="100vh"
      >
        <NavBar onThemeChange={handleThemeChange} />
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Background>
    </ThemeProvider>
  );
}

export default App;
