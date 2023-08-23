import { Container, Content, Feature } from './style';

import feature1 from '../../assets/feature1.svg';
import feature2 from '../../assets/feature2.svg';
import feature3 from '../../assets/feature3.svg';

export function Features() {
  return (
    <Container>
      <Content>
        <h1>
          O melhor do <strong>truckz</strong>
        </h1>
        <Feature widthText="28.25rem">
          <div>
            <h2>Anúncio de cargas</h2>
            <p>
              Insira detalhes importantes como tipo de carga e locais, e
              descubra uma rede de motoristas.
            </p>
          </div>
          <img src={feature1} alt="" />
        </Feature>
        <Feature widthText="33.875rem">
          <img src={feature2} alt="" />
          <div>
            <h2>Busca de motoristas</h2>
            <p>
              Encontre motoristas ideais para suas cargas através de critérios
              como distância e avaliações.
            </p>
          </div>
        </Feature>
        <Feature widthText="29.3125rem">
          <div>
            <h2>Encontre cargas disponíveis</h2>
            <p>
              Navegue por uma variedade de opções de carga, incluindo tipos,
              locais e datas de entrega.
            </p>
          </div>
          <img src={feature3} alt="" />
        </Feature>
      </Content>
    </Container>
  );
}
