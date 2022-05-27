import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Salah = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-9">
          <h3>Salah</h3>
          <p>
            Hi, my name is Salah and I am one of the creators of QA Cinemas! I
            have been part of mainly developing the front-end creation of the
            app as this was a strong point of my developments. This project has
            been great creating with my team as we have collaborated on ideas
            and made a fantastic app.
          </p>
          <p>
            I am proud of our achievments and can't wait to create more projects
            in the future such as QA Cinemas.
          </p>
          <a href="https://github.com/SalahS49">
            <FaGithub />
          </a>
          <br></br>
          <a href="https://www.linkedin.com/in/salah-salah-90927219a/">
            <FaLinkedin />
          </a>
        </div>
        <div className="col-md-3">
          <br />
        </div>
        <hr />
      </div>
    </>
  );
};

export default Salah;
