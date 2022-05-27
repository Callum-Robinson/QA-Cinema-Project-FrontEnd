const Date = () => {
  return (
    <div>
      <h3>Screening Date</h3>
      <label>
        <input
          name="user-recommend"
          value="saturday"
          type="radio"
          class="input-radio"
          checked
        />
        28/05/2022
      </label>
      <label>
        <input
          name="user-recommend"
          value="sunday"
          type="radio"
          class="input-radio"
          checked
        />
        29/05/2022{" "}
      </label>
      <label>
        <input
          name="user-recommend"
          value="monday"
          type="radio"
          class="input-radio"
          checked
        />
        30/05/2022{" "}
      </label>
      <label>
        <input
          name="user-recommend"
          value="tuesday"
          type="radio"
          class="input-radio"
          checked
        />
        31/05/2022{" "}
      </label>
      <label>
        <input
          name="user-recommend"
          value="wednesday"
          type="radio"
          class="input-radio"
          checked
        />
        01/06/2022{" "}
      </label>
    </div>
  );
};

export default Date;
