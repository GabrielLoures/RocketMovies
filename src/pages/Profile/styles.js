import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  height: 100vh;

`;

export const Header = styled.header`

  width: 100%;
  height: 144px;
  background-color: ${({ theme }) => theme.COLORS.PINK_5};

  padding: 62px 144px;

  > a {
    color: ${({ theme }) => theme.COLORS.PINK_100};
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

`;

export const Avatar = styled.div`

  position: relative;
  margin: -100px auto;

  width: 186px;
  height: 186px;

  margin-bottom: 64px;

  > img {
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: -17px;
    right: 0px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PINK_100};
    
    display: flex;
    place-items: center;
    justify-content: center;

    cursor: pointer;
  

    svg {
      width: 27px;
      height: 27px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
    }

    input {
      display: none;
    }
  }

`;

export const Form = styled.form`

  max-width: 340px;
  margin: 0 auto;

  > div:nth-child(3) {
    margin-top: 24px;
  }

  > button {
    margin-top: 24px;
  }
`;