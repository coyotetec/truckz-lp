import { Container, Content, Nav } from './style';

import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <a href="#home">
          <img src={logo} alt="Logo do truckz" />
        </a>
        <Nav>
          <li>
            <a href="#home">Início</a>
          </li>
          <li>
            <a href="#simplify">A Simplicidade</a>
          </li>
          <li>
            <a href="#download">Baixe o app</a>
          </li>
          <li>
            <a href="#features">Funcionalidades</a>
          </li>
        </Nav>
      </Content>
    </Container>
  );
}
