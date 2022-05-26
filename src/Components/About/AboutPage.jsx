import Info from "./Info";
import OurTeam from "./OurTeam";
import SocialLinks from "./SocialLinks";

const AboutPage = () => {
  return (
    <main>
      <div className="clear-fix">
        <div className="centered-text">
      
        <Info />
        <br></br></div>
        <OurTeam />
        <br></br>
      <SocialLinks /></div>
    </main>
  );
};

export default AboutPage;
