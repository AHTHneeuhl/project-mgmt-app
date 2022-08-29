import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";
import Spinner from "./Spinner";

import User from "./User";

const Clients = () => {
  const { data, loading, error } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>something went wrong</p>;

  console.log(data);

  return (
    <div>
      {data.clients.map(({ id, name, email, phone }) => (
        <User key={id} name={name} email={email} phone={phone} />
      ))}
    </div>
  );
};

export default Clients;
