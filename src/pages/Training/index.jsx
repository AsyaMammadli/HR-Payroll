import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { useState, useEffect } from "react";

const Training = () => {
  const baseURL = "http://localhost:3000/training";
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  if (!users) return null;
  return (
    <div>
      <PageTitle name="Training" />
      <table className="customTable">
        <tr>
          <th>Training Code</th>
          <th>Name Surname</th>
          <th>id</th>
          <th>Topic</th>
          <th>Teacher</th>
          <th>Training Date</th>
          <th>Taken</th>
        </tr>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.trainingCode}</td>
            <td>{user.name}</td>
            <td>{user.id}</td>
            <td>{user.topic}</td>
            <td>{user.teacher}</td>
            <td>{user.trainingDate}</td>
            <td>{user.taken == true ? "yes" : "no"}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Training;
