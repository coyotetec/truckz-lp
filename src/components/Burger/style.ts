import styled from 'styled-components';

export const Icon = styled.div`
  position: absolute;
  right: 16px;
  top: 24px;
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

      &:hover {
        color: ${({ theme }) => theme.colors.primary[400]};
      }
    }
  }
`;
