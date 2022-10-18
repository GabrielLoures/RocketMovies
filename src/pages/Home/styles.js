import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px 120px auto;
  grid-template-areas: "header" "description" "content";

  > div {
    grid-area: description;
    padding: 50px 123px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1200px;
  }

  > div h1 {
    font-size: 32px;
    line-height: 42px;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};
    white-space: nowrap;
  }

  > main {
    grid-area: content;
    overflow-y: auto;
    margin: 0 123px;

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
  }

`;