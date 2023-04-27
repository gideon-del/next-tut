import EventList from "@/components/events/eventList";
import { getAllEvents } from "@/dummy-data";
import { EventList as Events } from "@/types";

const EventsPage = () => {
  const events = getAllEvents() as Events[];
  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default EventsPage;
