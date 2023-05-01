import { default as Link } from "next/link";
import { FC } from "react";
import styles from "./button.module.css";
interface Props {
  children: any;
  link?: string;
  onClick?: () => void
}
const Button: FC<Props> = (props) => {
  if(props.link){
    
    return (
      <Link href={props.link} passHref className={styles.btn}>
     
        {props.children}
      </Link>
    );
  }
  return <button type='submit' className={styles.btn}> {props.children}</button>
};

export default Button;
