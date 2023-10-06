import { useState } from "react";

import styles from "./TopNavigation.module.scss";
import Container from "../UI/Container";
import Hamburger from "../UI/Hamburger";
import { Link } from "react-router-dom";

type NavListPropsType = {
  onClick?: () => void;
};
const NavList = ({ onClick }: NavListPropsType) => {
  return (
    <ul className={styles.navList}>
      <li>
        <Link to="/" onClick={onClick}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={onClick}>
          About
        </Link>
      </li>
      <li>
        <Link to="/portfolio" onClick={onClick}>
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={onClick}>
          Contact
        </Link>
      </li>
      <li>
        <a href="/Andrew_Ashley_CV_2023.pdf" target="_blank" onClick={onClick}>
          Resume
        </a>
      </li>
    </ul>
  );
};

const TopNavigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavHandler = () => {
    setNavOpen((prevState) => !prevState);
  };

  const linkClickHandler = () => {
    setNavOpen(false);
  };

  return (
    <Container element="nav" fluid className={styles.navBar}>
      <Container className={styles.navContainer}>
        <div className={styles.navLogo}>
          <img src="/aa_web_logo_nav.png" alt="Profile picture" />
        </div>
        <div className={styles.navLinks}>
          <NavList />
        </div>
        <div className={styles.navBurger}>
          <Hamburger isOpen={navOpen} onClick={toggleNavHandler} />
        </div>
      </Container>
      <div className={`${styles.menu} ${navOpen && styles.open}`}>
        <NavList onClick={linkClickHandler} />
      </div>
    </Container>
  );
};

export default TopNavigation;
