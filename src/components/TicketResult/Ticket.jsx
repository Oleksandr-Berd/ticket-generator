import Logo from "../Logo/Logo";
import * as SC from "./TicketStyled";
const Ticket = (props) => {

const {fullName, gitLogins} = props

  return (
    <SC.TicketStyled>
      <div>
        <div>
          <Logo />
          <p>Jan 31, 2025 / Austin, TX</p>
        </div>
        <div>
          <img src="#" alt="avatar" />
          <div>
            <h3>{fullName}</h3>
            <p>{gitLogins}</p>
          </div>
        </div>
      </div>
      <div>
        <p>#01609</p>
      </div>
    </SC.TicketStyled>
  );
};

export default Ticket;
