import styles from "./eventItem.module.css";
import React from "react";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
interface Props {
  title: string;
  image: string;
  date: string;
  location: string;
  id: string;
}
const EventItem: React.FC<Props> = (props) => {
  const humanReadableDate = new Date(props.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "2-digit",
  });
  const formated = props.location.replace(", ", "\n");
  const exploreLink = `/events/${props.id}`;
  return (
    <li className={styles.item}>
      <img src={`/${props.image}`} alt={props.title} />
      <div className={styles.content}>
        <div>
          <h2>Title</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formated}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
