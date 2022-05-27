import React from "react";
import Checkout from "./Checkout";
import Date from "./Date";
import FilmSelection from "./FilmSelection";
import TicketBooker from "./TicketBooker";
import Tickets from "./Tickets";
import Time from "./Time";

const TicketBookingPage = () => {
  return (
    <main>
      <div className="clear-fix">
        <div className="centered-text">
          <h1>Booking Your Movie</h1>
          <form id="ticket-booking">
            <TicketBooker />
            <br></br>
            <FilmSelection />
            <Date />
            <Time />
            <Tickets />
            <Checkout />
          </form>
        </div>
      </div>
    </main>
  );
};

export default TicketBookingPage;
