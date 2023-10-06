import styles from "./styles/Container.module.scss";

type ElementType = "nav" | "div" | "header" | "footer" | "main" | "form";

type ContainerPropsType = {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
  element?: ElementType;
};

/**
 * A container component to wrap content, it can optionally be set to fluid behavior. It also
 * accepts an optional element prop to specify the element to be used as the container.
 *
 * @param children - The content to be rendered inside the container.
 * @param className - Additional class name to be applied to the container.
 * @param fluid - If true, the container will adapt fluidly, otherwise it will have a fixed width.
 * @param element - The element to be used as the container
 * @default div
 * @returns A container element wrapping the provided children.
 */
const Container = ({
  children,
  className = "",
  fluid = false,
  element: Element = "div",
}: ContainerPropsType) => {
  const classes = [styles.container, fluid && styles.fluid, className];

  return (
    <Element className={classes.filter(Boolean).join(" ")}>{children}</Element>
  );
};

export default Container;
