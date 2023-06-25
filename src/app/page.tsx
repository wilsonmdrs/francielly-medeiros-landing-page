"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "~/styles/global";
import { theme } from "~/styles/theme";
import { Main } from "./styles";
import { Home } from "~/screens/Home";
import { Navbar } from "~/components/Navbar";

export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <Navbar />
        <Home />
      </Main>
    </ThemeProvider>
  );
}
