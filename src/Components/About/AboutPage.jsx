import Info from "./Info";
import OurTeam from "./OurTeam";
import SocialLinks from "./SocialLinks";

const AboutPage = () => {
  return (
    <main>
      <div class="centered-text">
        <div className="clear-fix">
          <div className="centered-text">

            <Info />
            <br></br>
            <OurTeam />
            <br></br>
            <SocialLinks />

            <SocialLinks />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
