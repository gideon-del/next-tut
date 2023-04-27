import { default as Link } from "next/link";
import { FC } from "react";
import styles from "./button.module.css";
interface Props {
  children: any;
  link: string;
}
const Button: FC<Props> = (props) => {
  return (
    <Link href={props.link}>
      {" "}
      <a className={styles.btn}>{props.children}</a>
    </Link>
  );
};

export default Button;
