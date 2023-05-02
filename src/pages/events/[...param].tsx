
import EventList from "@/components/events/eventList";
import ResultsTitle from "@/components/events/resultsTitle";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/errorAlert";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const Filters = () => {
  const {query} = useRouter()
   const data = query.param as string[]
  if(!data){
    return <p className="center">Loading...</p>
  }
  const year = +data[0];
  const  month = +data[1];
  if(isNaN(year) || isNaN(month) || year > 2030  || year < 2021 || month < 1 || month > 12){
    return <p>Invalid Filter. Please Adjust your value</p>
  }
  const filterdEvents =getFilteredEvents({year, month})
  if(!filterdEvents || filterdEvents.length === 0){
    return<>
    <ErrorAlert>

    <p>No Events Found FOr the choosen filter</p>
    </ErrorAlert>
    <div className="center">

    <Button link="/events">Show All Events</Button>
    </div>
    </> 
  }
  const date = new Date(year, month-1)
  return<>
  <ResultsTitle date={date.toString()} />
  <EventList items={filterdEvents}/>;
  </>
};

export default Filters;
