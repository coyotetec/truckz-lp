import { styled } from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black[600]};
  display: flex;
  flex-direction: column;
  height: 6rem;
  justify-content: center;
  position: fixed;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.white[100]};
  display: flex;
  margin: 0 auto;
  max-width: 70rem;
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2.25rem;
  justify-content: center;
  width: 100%;

  li {
    list-style: none;

    a {
      color: ${({ theme }) => theme.colors.white[100]};
      text-decoration: none;
    }
  }
`;
