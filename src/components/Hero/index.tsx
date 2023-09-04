import { Link } from 'react-scroll';
import { Button, Container } from './style';

export function Hero() {
  return (
    <Container id="home">
      <div data-aos="fade-right">
        <h1>
          O caminho mais rápido para <span>transportar</span> suas{' '}
          <span>cargas</span>.
        </h1>
        <Link to="download" smooth duration={500} offset={-80}>
          <Button type="button">Comece a Transportar</Button>
        </Link>
      </div>
    </Container>
  );
}
