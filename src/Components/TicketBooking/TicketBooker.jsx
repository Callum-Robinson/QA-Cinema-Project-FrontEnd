const TicketBooker = () => {
  return (
    <div><h3>Name</h3>
      <label for="name" id="name-label">
        First Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        class="form-control"
        required
      ></input>
      <br></br>
      <label for="name" id="name-label">
        Last Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        class="form-control"
        required
      ></input>
    </div>
  );
};

export default TicketBooker;
