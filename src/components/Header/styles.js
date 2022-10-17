import styled from 'styled-components';

export const Container = styled.header`

  grid-area: header;
  width: 100%;
  height: 116px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_HEADER_GREY};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  padding: 24px 123px;

`;

export const Profile = styled.div`

  display: flex;
  align-items: center;
  gap: 9px;

  white-space: nowrap; // evita quebra de linha

  > img {
    width: 64px;
    height: 64px;

    border: 1px solid ${({ theme }) => theme.COLORS.BORDER_HEADER_GREY};
    border-radius: 50%;
  }
  
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  > div p {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};
    font-weight: bold;
  }

  > div a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_PLACEHOLDER}; 
  }

`;

export const Brand = styled.div`

> h1 {
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }

`;