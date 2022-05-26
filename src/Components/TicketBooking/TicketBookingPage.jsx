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
    </main>
  );
};

export default TicketBookingPage;
