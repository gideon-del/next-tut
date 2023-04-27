import { FC } from "react";
import classes from "./event-content.module.css";
interface Props {
  children: any;
}
const EventContent: FC<Props> = (props) => {
  return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;
