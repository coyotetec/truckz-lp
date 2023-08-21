import { styled } from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black[500]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 6rem;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.white[100]};
  display: flex;
  gap: 12rem;
  margin: 0 auto;
  max-width: 1120px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2.25rem;

  li {
    list-style: none;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white[100]};
    }
  }
`;
