import LinkedInLogo from "../assets/linkedin.png";
import InstagramLogo from "../assets/instagram.png";
import GithubLogo from "../assets/github.png";

function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/fedecraviotto"
        target="_blank"
        rel="noreferrer"
      >
        <img src={LinkedInLogo} alt="linkedin-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/fede.craviotto"
        target="_blank"
        rel="noreferrer"
      >
        <img src={InstagramLogo} alt="instagram-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com/FedeCraviotto"
        target="_blank"
        rel="noreferrer"
      >
        <img src={GithubLogo} alt="github-link" className="rounded-md" />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
