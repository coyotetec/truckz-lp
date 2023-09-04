import { styled } from 'styled-components';
import { devices } from '../../styles/mediaQuerys';

export const Container = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black[600]};
  display: flex;
  flex-direction: column;
  height: 6rem;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 70rem;
  padding: 0 1.5rem;
  width: 100%;

  .image {
    z-index: 999;

    &:hover {
      cursor: pointer;
    }
  }

  .hamburger-react {
    display: none;
  }

  @media ${devices.md} {
    .hamburger-react {
      display: block;
      z-index: 10;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2.25rem;
  justify-content: center;
  width: 100%;
  margin-left: -176px;

  li {
    list-style: none;
    font-size: 1.1rem;

    a {
      color: ${({ theme }) => theme.colors.white[100]};
      text-decoration: none;
      border-bottom: 2px solid transparent;
      transition: border-bottom 0.2s ease-in-out;

      &:hover {
        cursor: pointer;
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary[400]};
      }
    }
  }

  @media ${devices.lg} {
    margin-left: 0;
    justify-content: flex-end;
  }

  @media ${devices.md} {
    display: none;
  }
`;
