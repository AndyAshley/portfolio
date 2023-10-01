import classes from "./PageWrapper.module.scss";

const PageWrapper = (props: any) => {
  return <main className={classes.pageWrapper}>{props.children}</main>;
};

export default PageWrapper;
