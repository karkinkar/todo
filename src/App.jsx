import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {Home} from './Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, lightBlue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: lightBlue,
  },
});

function App() {

  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </DndProvider>
  )
}


export default App;
