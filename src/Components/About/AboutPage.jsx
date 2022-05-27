import Info from "./Info";
import OurTeam from "./OurTeam";
import SocialLinks from "./SocialLinks";

const AboutPage = () => {
  return (
    <main>
      <div class="centered-text">
        <Info />
        <br></br>
        <OurTeam />
        <br></br>
      <SocialLinks />
      </div>
    </main>
  );
};

export default AboutPage;
