import IntroResult from "../IntroResult/IntroResult";
import Ticket from "../TicketResult/Ticket";
import * as SC from "./ResultTicketStyled"

const ResultTicket = ({ticket}) => {
    
    const { fullName, gitLogins, email} = ticket
        
    return ( 
        <SC.ResultTicketStyled>
            <IntroResult email={email} fullName={fullName}/>
            <Ticket fullName={fullName} gitLogins={gitLogins}/>
        </SC.ResultTicketStyled>
     );
}
 
export default ResultTicket;