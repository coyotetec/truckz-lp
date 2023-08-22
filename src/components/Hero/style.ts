import styled from 'styled-components';
import bgHero from '../../assets/heroBackground2.png';

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

    span {
      text-decoration: underline;
      text-underline-offset: 0.5rem;
      text-decoration-color: ${({ theme }) => theme.colors.primary[400]};
    }
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary[400]};
  border: none;
  border-radius: 8px;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 3.25rem;
  padding: 1.2rem 2rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    opacity: 0.95;
  }
`;
