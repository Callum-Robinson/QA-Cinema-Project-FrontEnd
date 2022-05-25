import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Mohab = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-9">
          <h3>Mohab</h3>
          <p>
            Hi, my name is Mohab and I am one of the creators of QA Cinemas! I
            can say working with my team has made creating this app a fun
            experience because we had the chance to bring our ideas together and
            create QA Cinemas. I have been part of mainly developing the
            back-end creation of the app.
          </p>

          <a href="https://github.com/Mohab-Khalifa">
            <FaGithub />
          </a>
          <br></br>
          <a href="https://www.linkedin.com/in/mohab-khalifa-47046215a/">
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

export default Mohab;
