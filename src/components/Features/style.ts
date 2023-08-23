import styled from 'styled-components';

export const Container = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black[500]};
  display: flex;
  flex-direction: column;
  height: 101vh;
  justify-content: flex-end;
  padding-top: 6rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 70rem;

  h1 {
    color: ${({ theme }) => theme.colors.white[100]};
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.primary[400]};
    text-underline-offset: 0.6rem;

    strong {
      font-weight: 600;
    }
  }
`;

type FeatureProps = {
  widthText?: string;
};

export const Feature = styled.div<FeatureProps>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;

  div {
    max-width: ${({ widthText }) => widthText};

    h2 {
      color: ${({ theme }) => theme.colors.white[100]};
      font-size: 2rem;
      font-weight: 300;
    }

    p {
      color: ${({ theme }) => theme.colors.white[300]};
    }
  }
`;
