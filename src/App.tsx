import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Simplify } from './components/Simplify';
import { Download } from './components/Download';

import mainTheme from './styles/themes/mainTheme';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <Header />
        <Hero />
        <Simplify />
        <Download />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
