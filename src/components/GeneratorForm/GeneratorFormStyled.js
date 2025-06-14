import styled from "@emotion/styled";

export const GeneratorFormStyled = styled.div`
  text-align: left;

@media (min-width: 768px){
    padding-left: 92px;
    padding-right: 92px;
}

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
  position: relative;

  margin-bottom: 24px;

  & input {
    width: 100%;

    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px;

    font-size: 18px;
    line-height: 1.2;

    background-color: #4b4869;

    border-radius: 12px;
    border: 1px solid #d1d0d5;

    &::placeholder {
      color: #d1d0d5;
    }
  }
`;

export const ErrorCon = styled.div`
  position: absolute;

  bottom: 0;
  left: 0;

  transform: translate(0, 20px);

  padding-left: 24px;

  color: #f57463;

&::before {
  position: absolute;
  top: 0;
  left: 0;

  display: inline-block;
  content: "";
  width: 16px;
  height: 16px;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='6' fill='%23f57463' stroke='%23D1D0D5' stroke-width='1.5'/%3E%3Cpath d='M8.004 10.462V7.596' stroke='%23D1D0D5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 5.57v-.042' stroke='%23D1D0D5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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

  background-color: #f57463;
  color: #0d082d;

  border-radius: 16px;
`;

export const AvatarInputStyled = styled.div`
  margin-bottom: 12px;
  padding: 20px 16px;
  text-align: center;

  background-color: #4b4869;
  color: #d1d0d5;

  border: 1px dashed;
  border-radius: 12px;

  & > div:first-of-type {
    display: inline-block;
    margin-bottom: 16px;
    padding: 12px;

    background-color: #8784a5;
    border-radius: 12px;

    width: 50px;
    height: 50px;

    /* 👇 Avatar image here */
    background-image: ${({ avatar }) =>
      avatar
        ? `url(${avatar})`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='none' viewBox='0 0 30 30'%3E%3Cpath fill='%23F57463' fill-rule='evenodd' d='M21.894 11.252a.264.264 0 0 1-.229-.225c-.368-2.634-2.51-5.924-6.663-5.924-4.465 0-6.3 3.636-6.657 5.928a.264.264 0 0 1-.228.22c-2.95.362-4.945 2.622-4.945 5.729a5.802 5.802 0 0 0 3.423 5.277 6.274 6.274 0 0 0 2.305.468h2.528a.45.45 0 0 0 .45-.45c0-.267-.233-.472-.5-.484a3.077 3.077 0 0 1-2.049-.9 3.123 3.123 0 0 1 0-4.418l3.461-3.462c.147-.146.307-.277.479-.392.076-.05.158-.085.236-.129.1-.054.196-.114.301-.158.1-.04.206-.065.308-.096.092-.027.181-.062.276-.081.191-.039.384-.056.578-.059.011 0 .022-.004.034-.004.01 0 .018.003.027.004.196.002.391.02.584.059.094.019.18.053.271.08.105.031.211.055.313.098.1.042.193.098.288.15.084.046.17.083.25.137.154.103.295.221.428.349.016.014.034.024.049.039l3.463 3.463a3.124 3.124 0 0 1 0 4.42c-.558.56-1.284.86-2.05.897-.266.013-.497.219-.497.486 0 .249.202.451.451.451h2.512c.435 0 1.314-.06 2.344-.473a5.794 5.794 0 0 0 3.394-5.272c0-3.104-1.991-5.363-4.935-5.728Z' clip-rule='evenodd'/%3E%3Cpath fill='%23F57463' fill-rule='evenodd' d='M18.464 19.62a.936.936 0 0 0 .663-1.6l-3.464-3.464a.938.938 0 0 0-.664-.275l-.014.002a.932.932 0 0 0-.65.274l-3.462 3.462a.936.936 0 1 0 1.326 1.325l1.864-1.862v6.479a.937.937 0 1 0 1.875 0v-6.48l1.864 1.863a.93.93 0 0 0 .662.275Z' clip-rule='evenodd'/%3E%3C/svg%3E")`};

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;

    & input {
      display: none;
    }
  }
`;

export const AvatarButtonsCon = styled.div`
  & > button {
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;

    background-color: #8784a5;
    color: #d1d0d5;

    border-radius: 4px;

    &:first-of-type {
      text-decoration: underline;
    }
  }
`;

export const UploadMessage = styled.div`
  position: relative;

  margin-bottom: 24px;

  padding-left: 24px;

  font-size: 12px;
  line-height: 1.2;
  letter-spacing: -0.2px;

  color: #d1d0d5;

  &::before {
    position: absolute;
    top: 0;
    left: 0;

    display: inline-block;
    content: "";
    width: 16px;
    height: 16px;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%23D1D0D5' stroke-linecap='round' stroke-linejoin='round' d='M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z'/%3E%3Cpath fill='%23D1D0D5' d='M8.004 10.462V7.596ZM8 5.57v-.042Z'/%3E%3Cpath stroke='%23D1D0D5' stroke-linecap='round' stroke-linejoin='round' d='M8.004 10.462V7.596M8 5.569v-.042'/%3E%3C/svg%3E");
  }
`;
