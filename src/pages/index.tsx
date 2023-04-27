import EventList from "@/components/events/eventList";
import { getFeaturedEvents } from "../dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
