import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";

import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

const User = ({ clientId, name, email, phone }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: clientId },
    // refetchQueries: [{ query: GET_CLIENTS }],
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== deleteClient.id),
        },
      });
    },
  });

  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{email}</p>
          <p className="card-text">{phone}</p>
          <button className="btn btn-danger btn-sm" onClick={deleteClient}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
