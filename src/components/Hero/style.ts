import styled from 'styled-components';
import bgHero from '../../assets/heroBackground.png';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.black[500]};
  height: 100vh;
  padding-top: 6rem;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  background-image: url(${bgHero});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  height: 90%;

  div {
    max-width: 1120px;
    margin: 0 auto;
    width: 100%;
  }

  h1 {
    color: ${({ theme }) => theme.colors.white[100]};
    font-size: 3.75rem;
    max-width: 41rem;
    padding-bottom: 10rem;

    span {
      text-decoration: underline;
    }
  }
`;
