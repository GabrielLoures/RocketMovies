import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  padding: 19px 24px;

  border-radius: 10px;

  > input {

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border: none;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR_PLACEHOLDER};
    }
  }

  > svg {
    margin-left: 12px;
  }

`