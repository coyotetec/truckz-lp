import { Link } from 'react-scroll';
import { Button, Container } from './style';

export function Hero() {
  return (
    <Container id="home">
      <div>
        <h1>
          O caminho mais rápido para <span>transportar</span> suas{' '}
          <span>cargas</span>.
        </h1>
        <Link to="download" smooth duration={500}>
          <Button type="button">Comece a Transportar</Button>
        </Link>
      </div>
    </Container>
  );
}
