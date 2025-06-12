import Logo from "../Logo/Logo";
import * as SC from "./TicketResultStyled";
const TicketResult = () => {
  return (
    <SC.TicketResultStyled>
      <div>
        <div>
          <Logo />
          <p>Jan 31, 2025 / Austin, TX</p>
        </div>
        <div>
          <img src="#" alt="avatar" />
          <div>
            <h3>name</h3>
            <p>login</p>
          </div>
        </div>
      </div>
      <div>
        <p>#01609</p>
      </div>
    </SC.TicketResultStyled>
  );
};

export default TicketResult;
