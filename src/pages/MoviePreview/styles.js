import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  > main {
    padding: 40px 123px;
  }

  > main a { 
    color: ${({ theme }) => theme.COLORS.PINK_100};
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  > main p {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    margin-top: 40px;
  }

  > .button {
    width: 150px;
    margin: 0px 123px;
  }

`;



