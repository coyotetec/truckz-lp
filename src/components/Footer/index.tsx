import { Container, Content } from './style';

import logo from '../../assets/logo.svg';

export function Footer() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo do truckz" />
        <p>Coyote Tecnologia © 2023 Todos os direitos reservados.</p>
      </Content>
    </Container>
  );
}
