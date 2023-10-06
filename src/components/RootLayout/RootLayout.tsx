import TopNavigation from "../TopNavigation/TopNavigation";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./RootLayout.module.scss";
import Container from "../UI/Container";

const RootLayout = () => {
  return (
    <>
      <TopNavigation />
      <Container element="main" className={styles.mainWrapper}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default RootLayout;
