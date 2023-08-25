import { Button, Container, Content } from './style';

export function Hero() {
  return (
    <Container id="home">
      <Content>
        <div>
          <h1>
            O caminho mais rápido para <span>transportar</span> suas{' '}
            <span>cargas</span>.
          </h1>
          <a href="#download">
            <Button type="button">Comece a transportar</Button>
          </a>
        </div>
      </Content>
    </Container>
  );
}
