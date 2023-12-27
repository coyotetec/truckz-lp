import styled from 'styled-components';
import bgHeroDesktop from '../../assets/heroBg-desktop.png';
import bgHeroMobile from '../../assets/heroBg-mobile.webp';
import { devices } from '../../styles/mediaQuerys';

export const Container = styled.section`
  align-items: center;
  display: flex;
  background-image: url(${bgHeroDesktop});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 94vh;
  width: 100%;
  padding-top: 6rem;
  padding: 0 1.5rem;

  div {
    margin: 0 auto;
    max-width: 70rem;
    width: 100%;
  }

  h1 {
    color: ${({ theme }) => theme.colors.white[100]};
    font-size: 3.75rem;
    max-width: 41rem;

    span {
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.colors.primary[400]};
      text-underline-offset: 0.5rem;
    }
  }

  @media ${devices.md} {
    background-image: url(${bgHeroMobile});
    background-position: center center;
    height: 90vh;

    h1 {
      max-width: 38rem;
    }
  }

  @media ${devices.sm} {
    background-position: left -27rem center;

    h1 {
      font-size: 2.8rem;
      max-width: 22rem;
    }
  }

  @media ${devices.xs} {
    background-position: left -22rem center;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary[400]};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 3.25rem;
  padding: 1rem 1.8rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    opacity: 0.95;
  }

  @media ${devices.md} {
    padding: 1rem 1.5rem;
    font-size: 1.4rem;
  }
`;
