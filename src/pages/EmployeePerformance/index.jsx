import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { useState, useEffect } from "react";
import "./index.css";
import User from "../../assets/User.svg";
import LineChart from "../../components/LineChart";
import DoughnutChart from "../../components/DoughnutChart";

const EmployeePerformance = () => {
  const baseURL = "http://localhost:3000/employee-performance";
  const [users, setUsers] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchPerformance = async () => {
    try {
      let response = await axios.get(baseURL);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
    }
  };
  useEffect(() => {
    fetchPerformance();
  }, []);

  if (!users) return null;
  return (
    <div>
      <>
        <div className="flex">
          <PageTitle name="Employee performance" />
          <img className="ml-5" src={User} alt="User" />
        </div>

        <ul className="tabs">
          <li
            className={`${activeIndex == 0 && "active"}`}
            onClick={() => setActiveIndex(0)}
          >
            All
          </li>
          <li
            className={`${activeIndex == 1 && "active"}`}
            onClick={() => setActiveIndex(1)}
          >
            Accepted
          </li>
          <li
            className={`${activeIndex == 2 && "active"}`}
            onClick={() => setActiveIndex(2)}
          >
            Rejected
          </li>
        </ul>

        <div className="flex justify-between">
          <table className="customTable w-7/12">
            <tr>
              <th>ID</th>
              <th>Name Surname</th>
              <th>Rating</th>
              <th>Project</th>
              <th>Position</th>
            </tr>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.nameSurname}</td>
                <td>{user.rating}</td>
                <td>{user.project}</td>
                <td>{user.position}</td>
              </tr>
            ))}
          </table>
          <div className="flex justify-center items-center mt-8 w-3/12">
            <DoughnutChart />
          </div>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
          <h1>Customer Satisfaction </h1>
          <LineChart />
        </div>
      </>
    </div>
  );
};

export default EmployeePerformance;
