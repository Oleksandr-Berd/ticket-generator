import * as SC from "./SharedLayoutStyled";

import Generator from "../../components/Generator/Generator";

const SharedLayout = () => {
  return (
    <SC.SharedLayoutStyled>
      <Generator />
    </SC.SharedLayoutStyled>
  );
};

export default SharedLayout;
