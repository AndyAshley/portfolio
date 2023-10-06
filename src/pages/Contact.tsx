import styles from "./styles/About.module.scss";
import Container from "../components/UI/Container";

const Portfolio = () => {
  return (
    <Container className={styles.container}>
      <img src="/aa_web_logo.png" alt="Profile picture" className="avatar" />
      <h1 className="font-main dev-cursor">ANDYASHLEY.DEV_</h1>
      <p>SOFTWARE ENGINEER</p>
      <h2>CONTACT</h2>
      <p className={styles.portfolioBlurb}>
        This portfolio website is currently under construction, in the meantime
        you can connect with me on LinkedIn
      </p>
      <a
        href="https://www.linkedin.com/in/andy-ashley-b70539204/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/linkedin-app-icon.svg"
          alt="LinkedIn logo"
          className="linkedIn"
        />
      </a>
    </Container>
  );
};

export default Portfolio;
