import styled from "@emotion/styled";

export const IntroStartStyled = styled.div`
  margin-bottom: 40px;

@media (min-width: 768px){
    margin-bottom: 44px;
}

  & > h3 {
    margin-bottom: 20px;

    font-size: 28px;
    line-height: 1.1;
    letter-spacing: -1px;
    font-weight: 800;

    @media (min-width: 768px){
        font-size: 60px;
    }
  }

  & > p {
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.5px;
    font-weight: 500;

    color: #D1D0D5;

    @media (min-width: 768px){
        font-size: 24px;
    }
  }
`;
