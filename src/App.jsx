import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Home } from './Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { GoogleAuthenticate } from './auth/GoogleAuthenticate';
import { AuthContext } from "./types/types";
import React from "react";

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: {
      main: "#81d4fa",
      light: "#b3e5fc",
      dark: "#0288d1",
      contrastText: "#fff"
    },
  },
});

const CurrentAuthContext = React.createContext(new AuthContext());

function App() {
  if (window.location.hash) {
    const urlParams = new URLSearchParams(window.location.hash.slice(1));
    const state = urlParams.get('state');
    const accessToken = urlParams.get('access_token');
    const tokenType = urlParams.get('token_type');
    const expiresIn = urlParams.get('expires_in');
    const scope = urlParams.get('scope');

    return (
      <CurrentAuthContext.Provider value={new AuthContext(accessToken, expiresIn)} >
        <DndProvider backend={HTML5Backend}>
          <ThemeProvider theme={theme}>
            <Home />
          </ThemeProvider>
        </DndProvider>
      </CurrentAuthContext.Provider>
    );
  }

  return <GoogleAuthenticate />
}

export default App;

//http://localhost:3001/#state=:state&access_token=:accessToken&token_type=:tokenType&expires_in=:expiresIn&scope=:scope&authuser=:authuser&prompt=:prompt