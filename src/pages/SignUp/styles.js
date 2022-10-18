import styled from 'styled-components';

import backgroundImg from '../../assets/background.jpg';

export const Container = styled.div`

  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;

`;

export const Form = styled.form`

  display: flex;
  flex-direction: column;

  padding: 200px 163px 300px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK_100};
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;  
  }

  > span {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_P};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin-top: 48px;
    margin-bottom: 48px;
  }

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.PINK_100};
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    margin-top: 42px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  > a svg {
    font-size: 20px;
  }

`;

export const Background = styled.div`

  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.4;

`;

