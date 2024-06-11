import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from 'react-router-dom'
import { Router } from 'app/config/router.tsx'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#f5841f',
      main: '#f5841f',
      dark: '#e57919',
      contrastText: '#fff',
    }
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>,
)
