import IntroResult from "../IntroResult/IntroResult";
import * as SC from "./ResultTicketStyled"

const ResultTicket = ({ticket}) => {
    
    
    console.log(ticket);
    
    return ( 
        <SC.ResultTicket>
            <IntroResult/>
        </SC.ResultTicket>
     );
}
 
export default ResultTicket;