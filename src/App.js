import logo from './logo.svg';
import './App.css';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {CustomButton , CLNavbar} from './components/CLNavbar/CLNavbar'
import {
  BrowserRouter,
  Routes,
  Route,
  Layout
} from "react-router-dom";
import {Home} from './routes/Home';
import {About} from './routes/About';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <About />
      </ThemeProvider>
    </div>
  );
}

export default App;
