import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LeavePermission = () => {
  const baseURL = "http://localhost:3000/permission";
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  if (!users) return null;
  return (
    <div>
      <PageTitle name="Leave Permission" />
      <table className="customTable">
        <tr>
          <th>Letter Code</th>
          <th>Date Filed</th>
          <th>name</th>
          <th>id</th>
          <th>Reason</th>
          <th>Start</th>
          <th>Expire</th>
          <th>Status</th>
          <th>Option</th>
        </tr>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.letterCode}</td>
            <td>{user.dateFiled}</td>
            <td>{user.name}</td>
            <td>{user.id}</td>
            <td>{user.reason}</td>
            <td>{user.start}</td>
            <td>{user.expire}</td>
            <td>
              <Link
                className="block bg-green-500 rounded-md my-2"
                to={`edit/${users.status}`}
              >
                Approved
              </Link>
              <Link
                className="block bg-red-500 rounded-md my-2"
                to={`delete/${users.status}`}
              >
                Rejected
              </Link>
            </td>
            <td>{user.option}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default LeavePermission;
