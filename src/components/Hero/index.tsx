import { Button, Container } from './style';

export function Hero() {
  return (
    <Container id="home">
      <div>
        <h1>
          O caminho mais rápido para <span>transportar</span> suas{' '}
          <span>cargas</span>.
        </h1>
        <a href="#download">
          <Button type="button">Comece a Transportar</Button>
        </a>
      </div>
    </Container>
  );
}
