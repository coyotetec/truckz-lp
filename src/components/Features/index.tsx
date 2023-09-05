import { Container, Content, Feature } from './style';

import feature1 from '../../assets/feature1.svg';
import feature2 from '../../assets/feature2.svg';
import feature3 from '../../assets/feature3.svg';
import { useEffect, useState } from 'react';

export function Features() {
  const { innerWidth: width } = window;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (width <= 768) {
      setIsMobile(true);
    }
  }, [width]);
  console.log(isMobile);

  return (
    <Container id="features">
      <Content>
        <h1>O Melhor do Truckz</h1>
        <Feature
          reverse
          data-aos="zoom-in-up"
          data-aos-offset={isMobile ? '300' : '100'}
        >
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
        <Feature
          data-aos="zoom-in-up"
          data-aos-offset={isMobile ? '200' : '100'}
        >
          <img
            src={feature2}
            alt="Ilustração de mulher buscando um perfil ideal de motorista"
          />
          <div>
            <h2>Busca de motoristas</h2>
            <p>
              Encontre motoristas ideais para suas cargas através de critérios
              como distância e avaliações.
            </p>
          </div>
        </Feature>
        <Feature
          reverse
          data-aos="zoom-in-up"
          data-aos-offset={isMobile ? '100' : '100'}
        >
          <div>
            <h2>Encontre cargas disponíveis</h2>
            <p>
              Navegue por uma variedade de opções de carga, incluindo tipos,
              locais e datas de entrega.
            </p>
          </div>
          <img src={feature3} alt="Motorista carregando caixas no carro" />
        </Feature>
      </Content>
    </Container>
  );
}
