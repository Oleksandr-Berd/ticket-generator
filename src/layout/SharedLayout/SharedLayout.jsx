import * as SC from "./SharedLayoutStyled";

import Generator from "../../components/Generator/Generator";
import { useState } from "react";
import TicketResult from "../../components/TicketResult/TicketResult";

const SharedLayout = () => {
  const [ticket, setTicket] = useState(null);

  const ticketSubmit = (ticketData) => {
    setTicket(ticketData);
  };

  return (
    <SC.SharedLayoutStyled>
      {ticket ? (
        <TicketResult ticket={ticket} />
      ) : (
        <Generator ticketSubmit={ticketSubmit} />
      )}
    </SC.SharedLayoutStyled>
  );
};

export default SharedLayout;
