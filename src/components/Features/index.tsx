import { useInView } from 'react-intersection-observer';
import { Container, Content, Feature } from './style';

import feature1 from '../../assets/feature1.svg';
import feature2 from '../../assets/feature2.svg';
import feature3 from '../../assets/feature3.svg';
import { BackToTopButton } from '../BackToTopButton';

export function Features() {
  const { ref, inView } = useInView();

  return (
    <Container id="features">
      <Content>
        <h1>O Melhor do Truckz</h1>
        <Feature $reverse data-aos="zoom-in-up" data-aos-offset="100">
          <div>
            <h2>Anúncio de cargas</h2>
            <p>
              Insira detalhes importantes como tipo de carga e locais, e
              descubra uma rede de motoristas.
            </p>
          </div>
          <img
            src={feature1}
            alt="Ilustração de pessoas carregando caixas com localização"
          />
        </Feature>
        <Feature data-aos="zoom-in-up" data-aos-offset="100">
          <img
            src={feature2}
            alt="Ilustração de mulher buscando um perfil ideal de motorista"
          />
          <div>
            <h2>Busca de motoristas</h2>
            <p ref={ref}>
              Encontre motoristas ideais para suas cargas através de critérios
              como distância e avaliações.
            </p>
          </div>
        </Feature>
        <Feature $reverse data-aos="zoom-in-up" data-aos-offset="100">
          <div>
            <h2>Encontre cargas disponíveis</h2>
            <p>
              Navegue por uma variedade de opções de carga, incluindo tipos,
              locais e datas de entrega.
            </p>
          </div>
          <img src={feature3} alt="Motorista carregando caixas no carro" />
        </Feature>
        <BackToTopButton onVisible={inView ? '2px' : '96px'} />
      </Content>
    </Container>
  );
}
