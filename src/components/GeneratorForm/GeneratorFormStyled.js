import styled from "@emotion/styled";

export const GeneratorFormStyled = styled.div`
  text-align: left;

  & label {
    display: inline-block;

    margin-bottom: 12px;

    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.5px;
  }
`;

export const TextInputConStyled = styled.div`
  margin-bottom: 24px;

  & input {
    width: 100%;

    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px;

    font-size: 18px;
    line-height: 1.2;

    background-color: #8784a5;

    border-radius: 12px;
    border: 1px solid #d1d0d5;

    &::placeholder {
      color: #d1d0d5;
    }
  }
`;

export const SubmitButtonStyled = styled.button`
width: 100%;

padding-top: 16px;
padding-bottom: 16px;

text-transform: uppercase;

font-size: 20px;
letter-spacing: -0.3px;
font-weight: 800;

background-color: #F57463;
color: #0D082D;

border-radius: 16px;
`