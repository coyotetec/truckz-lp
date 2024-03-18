import styled from 'styled-components';
import { devices } from '../../styles/mediaQuerys';

export const Container = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black[400]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  @media ${devices.xmd} {
    height: auto;
    padding: 4rem 0;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  gap: 4rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 70rem;
  padding: 0 1.5rem;

  img {
    max-width: 90%;
  }

  h1 {
    color: ${({ theme }) => theme.colors.white[100]};
    font-size: 2rem;
    max-width: 28rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.white[400]};
    font-size: 1.125rem;
    font-weight: 300;
    padding-bottom: 1.25rem;
  }

  .badge {
    margin-bottom: 2rem;
    display: inline-block;

    & + .badge {
      margin-left: 0.75rem;
    }

    @media ${devices.lg} {
      margin-bottom: 2rem;
    }
  }

  .points {
    align-items: center;
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.875rem;

    p {
      color: ${({ theme }) => theme.colors.white[400]};
      font-size: 1rem;
      font-weight: 500;
      max-width: 25.3125rem;
    }
  }

  @media ${devices.md} {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
