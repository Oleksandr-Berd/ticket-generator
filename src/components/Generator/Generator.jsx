import * as SC from "./GeneratorStyled"

import IntroStart from "../IntroStart/IntroStart";
import GeneratorForm from "../GeneratorForm/GeneratorForm";

const Generator = () => {
    return ( 
        <SC.GeneratorStyled>
            <IntroStart/>
            <GeneratorForm/>
        </SC.GeneratorStyled>
     );
}
 
export default Generator;