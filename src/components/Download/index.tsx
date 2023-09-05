import { Container, Content } from './style';

import smartphones from '../../assets/smartphones.svg';
import apple from '../../assets/apple-badge.svg';
import google from '../../assets/google-badge.svg';
import box from '../../assets/box.svg';

export function Download() {
  const { innerWidth: width } = window;
  const isMobile = width <= 768;

  return (
    <Container id="download">
      <Content>
        <img
          src={smartphones}
          alt="Smartphones exibindo a tela do truckz"
          data-aos="fade-up"
          data-aos-offset={isMobile ? '200' : '-100'}
          data-aos-duration="1500"
        />
        <div>
          <h1>Transporte inteligente ao seu alcance.</h1>
          <h3>
            Instale o <strong>truckz</strong> e comece Já!
          </h3>
          <img className="badge" src={apple} alt="Badge de download da Apple" />
          <img
            className="badge"
            src={google}
            alt="Badge de download do Google"
          />
          <div className="points" data-aos="flip-down" data-aos-duration="500">
            <img src={box} alt="Ícone de caixa" />
            <p>Encontre motoristas para suas cargas de forma rápida e fácil.</p>
          </div>
          <div
            className="points"
            data-aos="flip-down"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <img src={box} alt="Ícone de caixa" />
            <p>Descubra cargas para serem transportadas.</p>
          </div>
          <div
            className="points"
            data-aos="flip-down"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            <img src={box} alt="Ícone de caixa" />
            <p>Faça uma seleção dos seus motoristas favoritos.</p>
          </div>
        </div>
      </Content>
    </Container>
  );
}
