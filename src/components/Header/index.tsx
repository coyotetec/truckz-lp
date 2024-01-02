import { Container, Content, Nav, LoginButton, SingUpButton } from './style';
import { Link } from 'react-scroll';

import logo from '../../assets/logo.svg';
import { Burger } from '../Burger';

export function Header() {
  return (
    <Container>
      <Content>
        <Link to="home" smooth duration={500} className="image-link">
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
            <Link to="download" smooth duration={500} offset={-80}>
              Baixe o app
            </Link>
          </li>
          <li>
            <Link to="features" smooth duration={500} offset={-50}>
              Funcionalidades
            </Link>
          </li>
        </Nav>
        <div className="div-buttons">
          <a href="https://app.truckz.com.br/" target="_blank" rel="noreferrer">
            <LoginButton>Faça Login</LoginButton>
          </a>
          <a href="https://app.truckz.com.br/" target="_blank" rel="noreferrer">
            <SingUpButton>Cadastre-se</SingUpButton>
          </a>
        </div>
        <Burger />
      </Content>
    </Container>
  );
}
