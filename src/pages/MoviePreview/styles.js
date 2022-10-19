import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  > div {
    padding: 40px 123px;
  }

  > div a { 
    color: ${({ theme }) => theme.COLORS.PINK_100};
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

`;



