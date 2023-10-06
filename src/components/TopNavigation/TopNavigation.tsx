import { useState } from "react";

import styles from "./TopNavigation.module.scss";
import Container from "../UI/Container";
import Hamburger from "../UI/Hamburger";
import { NavLink } from "react-router-dom";

type NavListPropsType = {
  onClick?: () => void;
};
const NavList = ({ onClick }: NavListPropsType) => {
  return (
    <ul className={styles.navList}>
      <li>
        <NavLink
          to="/"
          onClick={onClick}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          end
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          onClick={onClick}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          end
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/portfolio"
          onClick={onClick}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          end
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          onClick={onClick}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          end
        >
          Contact
        </NavLink>
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
        <div className={styles.particle1} />
        <div className={styles.particle2} />
        <div className={styles.particle3} />
        <NavList onClick={linkClickHandler} />
      </div>
    </Container>
  );
};

export default TopNavigation;
