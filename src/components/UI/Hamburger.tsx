import styles from "./styles/Hamburger.module.scss";

type HamburgerPropsType = {
  isOpen: boolean;
  onClick: () => void;
};

const Hamburger = ({ isOpen, onClick }: HamburgerPropsType) => {
  return (
    <button
      className={`unsetBtn ${styles.hamburgerContainer}`}
      onClick={onClick}
      aria-label="Toggle Menu"
      aria-expanded={isOpen}
    >
      <div className={`${styles.hamburger} ${isOpen && styles.open}`}>
        <div
          className={`${styles.hamburgerLine} ${isOpen && styles.top}`}
        ></div>
        <div
          className={`${styles.hamburgerLine} ${isOpen && styles.middle}`}
        ></div>
        <div
          className={`${styles.hamburgerLine} ${isOpen && styles.bottom}`}
        ></div>
      </div>
    </button>
  );
};

export default Hamburger;
