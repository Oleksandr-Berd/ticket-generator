import * as SC from "./IntroResultStyled"

const IntroResult = ({email, fullName}) => {
    
    
    return ( 
        <SC.IntroResultStyled>
            <h4>Congrats, <span>{fullName}</span>! Your ticket is ready.</h4>
            <p>We've emailed your ticket to <span>{email}</span>  and will send updates in the run up to the event.</p>
        </SC.IntroResultStyled>
     );
}
 
export default IntroResult;