import Container from "../UI/Container";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <Container element="footer" fluid className={styles.footer}>
      <p>&copy; 2023 Andy Ashley | Created with React, TypeScript, and SCSS</p>
    </Container>
  );
};
