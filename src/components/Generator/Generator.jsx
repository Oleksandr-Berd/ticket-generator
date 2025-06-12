import * as SC from "./GeneratorStyled"

import IntroStart from "../IntroStart/IntroStart";
import GeneratorForm from "../GeneratorForm/GeneratorForm";

const Generator = ({ticketSubmit}) => {
    return ( 
        <SC.GeneratorStyled>
            <IntroStart/>
            <GeneratorForm ticketSubmit={ticketSubmit}/>
        </SC.GeneratorStyled>
     );
}
 
export default Generator;