import styled from "styled-components";

export const Container = styled.textarea`

  width: 100%;
  height: 275px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};

  padding: 19px 16px;

  border: none;
  resize: none;
  border-radius: 10px;

  margin: 40px 0 40px 0;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_PLACEHOLDER};
    font-size: 16px;
    line-height: 19px;
  }

`;