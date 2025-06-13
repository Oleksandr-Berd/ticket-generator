import styled from "@emotion/styled";

export const LogoStyled =styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

& > *:first-of-type{
    margin-right: 12px;
}

& > p{
    font-size: 20px;
    font-weight: 700;
}

& > img{
    width: 24px;
    height: 24px;
}
`