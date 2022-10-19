import styled from 'styled-components';

export const Container = styled.button`

  width: 100%;
  height: 56px;

  background-color: ${({ theme, isDelete }) => isDelete ? theme.COLORS.BACKGROUND_MARCADORES : theme.COLORS.PINK_100};
  color: ${({ theme, isDelete }) => isDelete ? theme.COLORS.PINK_100 : theme.COLORS.BACKGROUND_TAG};

  font-weight: 500;
  line-height: 21px;

  padding: 16px 16px;
  border: none;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

`;