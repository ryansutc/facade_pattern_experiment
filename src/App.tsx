// import { useState } from 'react';

import { Grid, ThemeProvider } from "@mui/material";
import "./App.css";
import { ThemedContainer } from "./components/themed/themedContainer";
import theme from "./utls/muitheme";

import CanvasWrapper from "./components/canvas/canvasWrapper";
import NavBar from "./components/navbar/navbar";
import Properties from "./components/properties/properties";
import { PropertiesProvider } from "./providers/Properties.provider";

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
        <PropertiesProvider>
          <NavBar />
          <Grid container>
            <Grid size={8}>
              <CanvasWrapper />
            </Grid>
            <Grid size={4}>
              <Properties />
            </Grid>
          </Grid>
        </PropertiesProvider>
      </ThemedContainer>
    </ThemeProvider>
  );
}
