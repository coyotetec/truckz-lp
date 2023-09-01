import { Container, Content } from './style';

import logoFooter from '../../assets/logo-footer.svg';

export function Footer() {
  return (
    <Container>
      <Content>
        <img src={logoFooter} alt="Logo do truckz" />
        <p>Coyote Tecnologia © 2023 Todos os direitos reservados.</p>
      </Content>
    </Container>
  );
}
