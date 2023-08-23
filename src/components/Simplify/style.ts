import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.black[500]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 44vh;
  width: 100%;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  width: 100%;

  h1 {
    color: ${({ theme }) => theme.colors.white[100]};
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 4.5rem;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.primary[400]};
    text-underline-offset: 0.8rem;
  }
`;

export const Steps = styled.div`
  align-items: start;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 6rem;
  justify-items: center;
  justify-content: center;
  width: 100%;

  h2 {
    color: ${({ theme }) => theme.colors.white[200]};
    font-size: 24px;
    font-weight: 200;
    margin-bottom: 1.5rem;
  }
`;
