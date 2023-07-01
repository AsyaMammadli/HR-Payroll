import PageTitle from "../../components/PageTitle";
import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Employees = () => {
  const baseURL = "http://localhost:3000/employees";
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  if (!users) return null;
  return (
    <div>
      <PageTitle name="Employees" />

      <table className="customTable">
        <tr>
          <th>Name Surname</th>
          <th>ID</th>
          <th>Status</th>
          <th>Position</th>
          <th>Login</th>
          <th>APPLICATION DATE</th>
        </tr>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.id}</td>
            <td>{user.status}</td>
            <td>{user.position}</td>
            <td>{user.login}</td>
            <td>{user.applicationDate}</td>{" "}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Employees;
