import EventList from "@/components/events/eventList";
import EventsSearch from "@/components/events/eventsSearch";
import { getAllEvents } from "@/dummy-data";
import { EventList as Events } from "@/types";
import { useRouter } from "next/router";

const EventsPage = () => {
  const events = getAllEvents() as Events[];
  const router = useRouter()
  const findEventsHandler = (year: string, month: string) => {
    const fullpath = `/events/${year}/${month}`
    router.push(fullpath)
  }
  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export default EventsPage;
