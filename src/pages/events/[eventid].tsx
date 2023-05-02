import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import ErrorAlert from "@/components/ui/errorAlert";
import { getEventById } from "@/dummy-data";
import { EventList } from "@/types";
import { useRouter } from "next/router";

const SpecificEvent = () => {
  const router = useRouter();
  const eventID = router.query.eventid;
  const event = getEventById(eventID) as EventList;
  if (!event) {
    return <ErrorAlert>
    <p>No event found</p>;
    </ErrorAlert>
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        key={event.id}
        imageAlt={event.title}
      />

      <EventContent>
        {" "}
        <p>{event.description}</p>{" "}
      </EventContent>
    </>
  );
};

export default SpecificEvent;
