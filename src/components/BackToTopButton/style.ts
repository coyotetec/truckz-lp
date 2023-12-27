import styled from 'styled-components';

type ButtonProps = {
  show: string;
};

export const ButtonTop = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black[200]};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px;
  border: none;
  border-radius: 32px;
  bottom: 42px;
  display: flex;
  gap: 14px;
  height: 48px;
  justify-content: end;
  overflow: hidden;
  padding: 0 14px;
  position: fixed;
  right: 32px;
  transition: all 0.3s ease-in-out;
  transform: ${({ show }) => `translateY(${show})`};
  width: 48px;

  span {
    min-width: 105px;
  }

  img {
    width: 26px;
    height: 26px;
  }

  &:hover {
    width: 165px;
  }
`;
