import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Allister = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-9">
          <h3>Allister</h3>
          <p>
            Hi, my name is Allister and I am one of the creators of QA Cinemas!
            I've thoroughly enjoyed being part of this project and hope you
            enjoyed working with my team! I have been part of mainly developing
            the front-end creation of the app.
          </p>

          <a href="https://github.com/awggardner">
            <FaGithub />
          </a>
<br></br>
          <a href="https://www.linkedin.com/in/allister-gardner-43b6b6236/">
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

export default Allister;
