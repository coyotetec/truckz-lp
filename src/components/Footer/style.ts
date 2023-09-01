import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.black[600]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 12.375rem;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  padding: 0 1.5rem;
  width: 100%;

  p {
    color: ${({ theme }) => theme.colors.white[800]};
    font-size: 0.875rem;
    font-weight: 100;
    padding-top: 0.5rem;
  }
`;
