import styled from "@emotion/styled";

export const IntroResultStyled = styled.div`
  margin-bottom: 64px;

  & > h4 {
    margin-bottom: 20px;

    font-size: 30px;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -1px;

    & > span {
      background: linear-gradient(to right, #f57463, #ffffff);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
    }
  }

  & > p {
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.5px;
    font-weight: 500;

    color: #d1d0d5;

    & > span {
      color: #f57463;
    }
  }
`;
