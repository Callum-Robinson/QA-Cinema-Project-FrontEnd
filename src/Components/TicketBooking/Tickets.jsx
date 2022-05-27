const Tickets = () => {
  return (
    <div>
      <h3>Select Tickets</h3>
      <label for="number" id="tickets">
        {" "}
        Adult Tickets:{" "}
      </label>
      <input type="number" min="1" max="12" /> <input />
      <br></br>
      <label for="number" id="tickets">
        {" "}
        Child Tickets:{" "}
      </label>
      <input type="number" min="1" max="12" /> <input />
      <br></br>
      <label for="number" id="tickets">
        {" "}
        Concession:{" "}
      </label>
      <input type="number" min="1" max="12" /> <input />
    </div>
  );
};

export default Tickets;
