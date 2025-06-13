import * as SC from "./TicketStyled";

import logoTicket from "../../assets/images/logo-mark.svg";
const Ticket = (props) => {
  const { fullName, gitLogins, avatar } = props;

  return (
    <SC.TicketStyled>
      <div>
        <SC.LogoTicket>
          <SC.TicketIconThumb>
            <img src={logoTicket} alt="logoTicket" width={29} height={29} />
          </SC.TicketIconThumb>
          <SC.DateCon>
            <h4>Coding Conf</h4>
            <p>Jan 31, 2025 / Austin, TX</p>
          </SC.DateCon>
        </SC.LogoTicket>
        <SC.TicketPersonCon>
          <SC.TicketAvatarThumb>
            <img src={URL.createObjectURL(avatar)} alt="avatar" />
          </SC.TicketAvatarThumb>
          <SC.PersonDataCon>
            <h3>{fullName}</h3>
            <p>{gitLogins}</p>
          </SC.PersonDataCon>
        </SC.TicketPersonCon>
      </div>
      <SC.TicketNumber>
        <p>#01609</p>
      </SC.TicketNumber>
    </SC.TicketStyled>
  );
};

export default Ticket;
