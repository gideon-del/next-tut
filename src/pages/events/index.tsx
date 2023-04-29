import EventList from "@/components/events/eventList";
import EventsSearch from "@/components/events/eventsSearch";
import { getAllEvents } from "@/dummy-data";
import { EventList as Events } from "@/types";

const EventsPage = () => {
  const events = getAllEvents() as Events[];
  return (
    <>
      <EventsSearch />
      <EventList items={events} />
    </>
  );
};

export default EventsPage;
