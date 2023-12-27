import styled from 'styled-components';

export const Icon = styled.div`
  position: absolute;
  right: 16px;
  top: 20px;
  z-index: 100;
`;

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black[600]};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 50;
`;

export const Nav = styled.nav`
  li {
    list-style: none;
    font-size: 2rem;
    text-align: center;
    padding: 1rem 0;

    a {
      color: ${({ theme }) => theme.colors.white[100]};
      text-decoration: none;

      &:active,
      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.primary[400]};
      }
    }
  }
`;
