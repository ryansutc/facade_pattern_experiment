// import { useState } from 'react';

import { ThemeProvider } from "@mui/material";
import "./App.css";
import { ThemedContainer } from "./components/themed/themedContainer";
import theme from "./utls/muitheme";

import NavBar from "./components/navbar/navbar";

export default function App() {
  return (
    <ThemeProvider disableTransitionOnChange theme={theme}>
      <ThemedContainer
        maxWidth="xl"
        component="main"
        sx={{
          display: "col",
          flexDirection: "row",
          my: 16,
          gap: { xs: 2, sm: 4, md: 8 },
        }}
      >
        <NavBar />
        <div>Facde Pattern Experiment</div>
      </ThemedContainer>
    </ThemeProvider>
  );
}
