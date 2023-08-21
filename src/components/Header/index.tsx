import { Container, Content, Nav } from './style';
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <a href="">
          <img src={logo} alt="Logo do truckz" />
        </a>
        <Nav>
          <li>
            <a href="">Início</a>
          </li>
          <li>
            <a href="">A Simplicidade</a>
          </li>
          <li>
            <a href="">Baixe o app</a>
          </li>
          <li>
            <a href="">Funcionalidades</a>
          </li>
        </Nav>
      </Content>
    </Container>
  );
}
