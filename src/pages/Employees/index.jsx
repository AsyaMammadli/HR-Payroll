import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { cloneDeep } from "lodash";
import customParseFormat from "dayjs/plugin/customParseFormat";
import axios from "axios";
import PageTitle from "../../components/PageTitle";
import "./index.css";

dayjs.extend(customParseFormat);

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
          <th>
            Login{" "}
            <span
              onClick={() => {
                setUsers((previousData) => {
                  const data = cloneDeep(previousData);
                  // artan sira ile
                  data.sort((f, s) => {
                    return (
                      dayjs(f.login, "DD/MM/YY").unix() -
                      dayjs(s.login, "DD/MM/YY").unix()
                    );
                  });
                  return data;
                });
              }}
            >
              ^
            </span>
          </th>
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
