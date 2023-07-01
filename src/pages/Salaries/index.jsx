import "./index.css";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { useEffect, useState } from "react";

const Salaries = () => {
  const baseURL = "http://localhost:3000/salary";
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  if (!users) return null;

  return (
    <div>
      <PageTitle name="Salaries" />

      <table className="customTable">
        <tr>
          <th>ID</th>
          <th>Name Surname</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Transport</th>
          <th>Meal allowance</th>
          <th>Discount</th>
          <th>Total Salary</th>
        </tr>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.position}</td>
            <td>{user.salary}</td>
            <td>{user.transport}</td>
            <td>{user.mealAllowance}</td>
            <td>{user.discount}</td>
            <td>{user.totalSalary}</td>{" "}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Salaries;
