import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const SocialLinks = () => {

    return(
<div>
    <h1> Our Social Links </h1>
    <hr />
    <a href="https://www.facebook.com/QALtd/">
        <FaFacebook />
    </a>
    <a href="https://twitter.com/QA_Ltd">
        <FaTwitter />
    </a>
    <a href="https://www.instagram.com/accounts/login/?next=/qalimited/">
        <FaInstagram />
    </a>
    <a href="https://www.youtube.com/channel/UCr5kx6_fYtqx0LLD7aW2zIg?view_as=subscriber">
        <FaYoutube />
    </a>
</div>
    );
};

export default SocialLinks;