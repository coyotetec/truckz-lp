import { Container, Content, Nav } from './style';
import { Link } from 'react-scroll';

import logo from '../../assets/logo.svg';
import { Burger } from '../Burger';

export function Header() {
  return (
    <Container>
      <Content>
        <Link to="home" smooth duration={500} className="image">
          <img src={logo} alt="Logo do truckz" />
        </Link>
        <Nav>
          <li>
            <Link to="home" smooth duration={500}>
              Início
            </Link>
          </li>
          <li>
            <Link to="simplify" smooth duration={500} offset={-90}>
              A Simplicidade
            </Link>
          </li>
          <li>
            <Link to="download" smooth duration={500} offset={-90}>
              Baixe o app
            </Link>
          </li>
          <li>
            <Link to="features" smooth duration={500} offset={-90}>
              Funcionalidades
            </Link>
          </li>
        </Nav>
        <Burger />
      </Content>
    </Container>
  );
}
