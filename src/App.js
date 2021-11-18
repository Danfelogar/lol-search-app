import { Provider } from "react-redux";
import { ThemeProvider } from '@mui/material';

import { theme }  from './assets/styles/supportMui';
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";


function App() {
  return (
    <Provider store={ store }>
      <ThemeProvider theme={ theme } >
        <AppRouter/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
