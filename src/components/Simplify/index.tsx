import { Container, Content, Steps } from './style';

import deliveryman from '../../assets/deliveryman.svg';
import truck from '../../assets/truck.svg';
import successPhone from '../../assets/successPhone.svg';

export function Simplify() {
  return (
    <Container id="simplify">
      <Content>
        <h1>Veja Como é Simples</h1>
        <Steps>
          <div data-aos="zoom-in">
            <h2>1. Anuncie sua carga</h2>
            <img src={deliveryman} alt="Homem amontoando caixas" />
          </div>

          <div data-aos="zoom-in" data-aos-delay="200">
            <h2>2. Encontre um motorista</h2>
            <img src={truck} alt="Caminhão com ícones de localização" />
          </div>

          <div data-aos="zoom-in" data-aos-delay="350">
            <h2>3. Entrega concluída</h2>
            <img src={successPhone} alt="Smartphone com símbolo de sucesso" />
          </div>
        </Steps>
      </Content>
    </Container>
  );
}
