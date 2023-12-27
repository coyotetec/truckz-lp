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
  justify-content: space-between;
  margin: 0 auto;
  max-width: 70rem;
  padding: 0 1.5rem;
  width: 100%;

  .image-link {
    z-index: 80;

    &:hover {
      cursor: pointer;
    }
  }

  .div-buttons {
    display: flex;
    gap: 0.75rem;
    z-index: 80;
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

  @media ${devices.mmd} {
    .div-buttons {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2.25rem;
  justify-content: center;
  /* width: 100%;
  margin-left: -176px; */

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

    li {
      font-size: 14px;
    }
  }

  @media ${devices.md} {
    display: none;
  }
`;

export const LoginButton = styled.button`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.black[600]};
  border: none;
  border: 2px solid ${({ theme }) => theme.colors.primary[600]};
  outline: none;
  width: 8rem;
  height: 3rem;

  @media ${devices.lg} {
    font-size: 0.875rem;
    width: 6rem;
  }

  @media ${devices.sm} {
    font-size: 0.75rem;
    height: 2.5rem;
    width: 5rem;
  }
`;

export const SingUpButton = styled.button`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary[600]};
  border: none;
  outline: none;
  width: 8rem;
  height: 3rem;

  @media ${devices.lg} {
    font-size: 14px;
    width: 6rem;
  }

  @media ${devices.sm} {
    font-size: 0.75rem;
    height: 2.5rem;
    width: 5rem;
  }
`;
