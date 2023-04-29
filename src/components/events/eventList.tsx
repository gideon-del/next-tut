import { EventList as Events } from "@/types";
import React from "react";
import EventItem from "./eventItem";
import styles from "./eventList.module.css";
interface Props {
  items: Events[];
}
const EventList: React.FC<Props> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((e) => (
        <EventItem
          key={e.id}
          id={e.id}
          title={e.title}
          location={e.location}
          image={e.image}
          date={e.date}
        />
      ))}
    </ul>
  );
};

export default EventList;
