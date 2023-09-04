import { useEffect } from 'react';
import Aos from 'aos';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Simplify } from './components/Simplify';
import { Download } from './components/Download';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

import mainTheme from './styles/themes/mainTheme';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({ once: true, duration: 1300 });
  }, []);

  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <Header />
        <Hero />
        <Simplify />
        <Download />
        <Features />
        <Footer />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
