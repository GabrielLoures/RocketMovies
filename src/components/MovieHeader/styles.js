import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;

  > div {
    display: flex;
    align-items: center;

    margin-top: 24px;
    margin-bottom: 24px;
  }

  > div h1 {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
    margin-right: 20px;
  }

  > .infos {
    display: flex;
    align-items: center;

    img {
      width: 16px;
      height: 16px;

      border: 1px solid ${({ theme }) => theme.COLORS.BORDER_HEADER_GREY};
      border-radius: 50%;
      margin-right: 8px;
    }

    span {
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      margin-right: 16px;
    }

    svg {
      fill: ${({ theme }) => theme.COLORS.PINK_100};
      margin-right: 8px;
    }
  }

   

  
  
`;