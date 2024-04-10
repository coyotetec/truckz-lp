import { Container, Content } from './style';

import logoFooter from '../../assets/logo-footer.svg';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <Content>
        <img src={logoFooter} alt="Logo do truckz" />
        <p>{`Coyote Tecnologia © ${currentYear} - Todos os direitos reservados.`}</p>
      </Content>
    </Container>
  );
}
