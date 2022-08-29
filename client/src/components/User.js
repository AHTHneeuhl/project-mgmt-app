import { FaTrash } from "react-icons/fa";

const User = ({ name, email, phone }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{email}</p>
        <p className="card-text">{phone}</p>
        <button className="btn btn-danger btn-sm">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default User;
