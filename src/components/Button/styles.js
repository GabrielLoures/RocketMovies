import styled from 'styled-components';

export const Container = styled.button`

  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};

  font-weight: 500;
  line-height: 21px;

  padding: 16px auto;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

`;