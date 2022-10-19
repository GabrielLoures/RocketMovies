import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  align-items: center;
  gap: 16px;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  color: ${({ theme, isNew }) => isNew ? theme.COLORS.TEXT_COLOR_PLACEHOLDER : theme.COLORS.TEXT_COLOR_WHITE};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.TEXT_COLOR_PLACEHOLDER}` : "none"};

  border-radius: 10px;

  > button {
    border: none;
    background: none;
    padding: 16px 16px 16px 0;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 16px;

    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_PLACEHOLDER};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR_PLACEHOLDER};
    }
  }

`;