import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.black[500]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 100%;
  padding: 4rem 0;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  padding: 0 1.5rem;
  width: 100%;

  h1 {
    color: ${({ theme }) => theme.colors.white[100]};
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 4rem;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.primary[400]};
    text-underline-offset: 0.4rem;
    text-align: center;
  }
`;

export const Steps = styled.div`
  align-items: start;
  display: flex;
  flex-wrap: wrap;
  gap: 6rem;
  justify-content: center;
  width: 100%;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 4;

    &::before {
      content: '';
      position: absolute;
      width: 240px;
      height: 240px;
      background: ${({ theme }) => theme.colors.black[400]};
      border-radius: 999px;
      z-index: 4;
    }

    img {
      height: 180px;
      z-index: 5;
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.white[200]};
    font-size: 24px;
    font-weight: 200;
    margin-bottom: 1.5rem;
    z-index: 5;
  }
`;
