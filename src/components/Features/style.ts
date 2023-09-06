import styled from 'styled-components';
import { devices } from '../../styles/mediaQuerys';

export const Container = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black[500]};
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;

  /* @media ${devices.xl} {
    height: auto;
  } */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 70rem;
  width: 100%;
  padding: 4rem 1.5rem;

  h1 {
    color: ${({ theme }) => theme.colors.white[100]};
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.primary[400]};
    text-underline-offset: 0.4rem;
  }
`;

type FeatureProps = {
  reverse?: boolean;
};

export const Feature = styled.div<FeatureProps>`
  align-items: center;
  display: flex;
  gap: 2rem;
  margin-top: 3.5rem;
  align-self: center;
  max-width: 80%;

  div {
    h2 {
      color: ${({ theme }) => theme.colors.white[100]};
      font-size: 2rem;
      font-weight: 300;
    }

    p {
      color: ${({ theme }) => theme.colors.white[300]};
    }
  }

  @media ${devices.md} {
    flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};

    div {
      padding-top: 0.5rem;
      max-width: 28.25rem;
    }
  }
`;
