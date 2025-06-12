import IntroResult from "../IntroResult/IntroResult";
import Ticket from "../TicketResult/Ticket";
import * as SC from "./ResultTicketStyled"

const ResultTicket = ({ticket}) => {
    
    const { fullName, gitLogins, email, avatar} = ticket
        
    return ( 
        <SC.ResultTicketStyled>
            <IntroResult email={email} fullName={fullName}/>
            <Ticket fullName={fullName} gitLogins={gitLogins} avatar={avatar}/>
        </SC.ResultTicketStyled>
     );
}
 
export default ResultTicket;