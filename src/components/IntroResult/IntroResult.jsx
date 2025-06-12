import * as SC from "./IntroResultStyled"

const IntroResult = ({email, fullName}) => {
    
    
    return ( 
        <div>
            <h4>Congrats, {fullName}! Your ticket is ready.</h4>
            <p>We've emailed your ticket to {email} and will send updates in the run up to the event.</p>
        </div>
     );
}
 
export default IntroResult;