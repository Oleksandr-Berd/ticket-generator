import * as SC from "./SharedLayoutStyled";

import Generator from "../../components/Generator/Generator";
import { useState } from "react";
import ResultTicket from "../../components/ResultTicket/ResultTicket";

const SharedLayout = () => {
  const [ticket, setTicket] = useState(null);

  const ticketSubmit = (ticketData) => {
    setTicket(ticketData);
  };

  return (
    <SC.SharedLayoutStyled>
      {ticket ? (
        <ResultTicket ticket={ticket} />
      ) : (
        <Generator ticketSubmit={ticketSubmit} />
      )}
    </SC.SharedLayoutStyled>
  );
};

export default SharedLayout;
