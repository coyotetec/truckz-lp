import { Header } from './components/Header';
import { Hero } from './components/Hero';

import mainTheme from './styles/themes/mainTheme';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Simplify } from './components/Simplify';

function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <Header />
        <Hero />
        <Simplify />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
