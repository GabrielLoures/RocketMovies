import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  > div {
    padding: 40px 123px;
  }

  > div h1 {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
    margin-top: 24px;
  }

  > div a { 
    color: ${({ theme }) => theme.COLORS.PINK_100};
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

`;

export const Form = styled.form`

  padding: 0 123px 85px 123px;
  overflow-y: auto;
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK_100};    
    border-radius: 8px;       
    border: 8px transparent;
  }

  > div {
    display: flex;
    gap: 40px;
  }

  > h1 {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_GREY};
  }

`;

