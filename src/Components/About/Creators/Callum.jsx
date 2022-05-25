import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Callum = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-9">
          <h3>Callum</h3>
          <p>
            Hi, my name is Callum and I am one of the creators of QA Cinemas! My
            time working with my team creating this app was really fun and
            collaborate with my team members. I have been part of mainly
            developing the back-end creation of the app.
          </p>

          <a href="https://github.com/Callum-Robinson">
            <FaGithub />
          </a>
          <br></br>
          <a href="https://www.linkedin.com/in/callum-robinson-388524239/">
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

export default Callum;
