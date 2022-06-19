import React from "react";
import { Box, Center, extendTheme } from "@reverb-ui/react";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/presentation/container/login";
import { ThemeProvider } from "@reverb-ui/react";
import Style from "./style";

const themeCustom = extendTheme(Style);

export default function App() {
  return (
    <ThemeProvider theme={themeCustom} resetCSS>
      <Center>
        <Box w="428px">
          <Routes>
            <Route path="/" element={<div>Root</div>} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<div>Essa página não existe</div>} />
          </Routes>
        </Box>
      </Center>
    </ThemeProvider>
  );
}
