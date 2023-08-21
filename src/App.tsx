import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/GlobalStyles';
import mainTheme from './styles/themes/mainTheme';

function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <Header />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
