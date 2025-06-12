import * as SC from "./LogoStyled"

import logoIcon from "../../assets/images/logo-mark.svg"
const Logo = () => {
  return (
    <SC.LogoStyled>
      <img src={logoIcon} alt="logo" />
      <p>Coding Conf</p>
    </SC.LogoStyled>
  );
};

export default Logo;
