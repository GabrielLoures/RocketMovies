import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  /* height: 223px; */
  padding: 32px;

  background-color: ${({ theme }) => theme.COLORS.PINK_5};

  border-radius: 16px;

  margin-bottom: 24px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;

    margin-bottom: 8px;
  }

  > div svg {
    fill: ${({ theme }) => theme.COLORS.PINK_100};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_GREY};
    margin-top: 15px;  
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }

`