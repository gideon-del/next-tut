import { useRouter } from "next/router";

const Filters = () => {
  const {query} = useRouter()
   const data = query.param as string[]
   console.log(data)
  return <div>Filterd Events</div>;
};

export default Filters;
