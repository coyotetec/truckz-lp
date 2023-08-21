import { styled } from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black[600]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 6rem;
  position: fixed;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.white[100]};
  display: flex;
  margin: 0 auto;
  max-width: 1120px;
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2.25rem;
  width: 100%;
  justify-content: center;

  li {
    list-style: none;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white[100]};
    }
  }
`;
