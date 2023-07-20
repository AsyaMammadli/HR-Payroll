import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LeavePermission = () => {
  const baseURL = "http://localhost:3000/permission";
  const [users, setUsers] = useState(null);

  const fetchPermissions = async () => {
    try {
      let response = await axios.get(baseURL);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
    }
  };
  useEffect(() => {
    fetchPermissions();
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
              {user.status == "Approved" && (
                <div className="block bg-green-500 rounded-md my-2">
                  Approved
                </div>
              )}

              {user.status == "Rejected" && (
                <div className="block bg-red-500 rounded-md my-2">Rejected</div>
              )}

              <select className="text-black">
                <option value="approved" selected={user.status === "Approved"}>
                  Approved
                </option>
                <option value="rejected" selected={user.status === "Rejected"}>
                  Rejected
                </option>
              </select>
            </td>

            <td>
              {user.status == "Approved" && (
                <div className="bg-blue-500 rounded-md my-2">{user.option}</div>
              )}
              {user.status == "Rejected" && (
                <div className="bg-gray-500 rounded-md my-2">{user.option}</div>
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default LeavePermission;
