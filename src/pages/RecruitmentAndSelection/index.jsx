import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecruitmentAndSelection = () => {
  const baseURL = "http://localhost:3000/recruitment-and-selection";
  const [candidates, setCandidates] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCandidates(response.data);
    });
  }, []);

  if (!candidates) return null;

  return (
    <div>
      <PageTitle name="Recruitment and selection" />
      <table className="customTable">
        <tr>
          <th>Vacancy Details</th>
          <th>Information</th>
          <th>Skills</th>
          <th>Action</th>
        </tr>
        {candidates.map((candidate, index) => (
          <tr key={index}>
            <td className="text-left">
              <div>Vacancy : {candidate.vacancyDetails.vacancy}</div>
              <div>Education : {candidate.vacancyDetails.education}</div>
              <div>Valid Until : {candidate.vacancyDetails.validUntil}</div>
              <div>Requirement : {candidate.vacancyDetails.requirement}</div>
            </td>
            <td>{candidate.information}</td>
            <td>
              {candidate.skills.map((skill, index) => (
                <div key={index}>
                  {index + 1}. {skill}
                </div>
              ))}
            </td>
            <td>
              <Link
                className="block bg-green-500 rounded-md my-2"
                to={`edit/${candidate.id}`}
              >
                Edit
              </Link>
              <Link
                className="block bg-red-500 rounded-md my-2"
                to={`delete/${candidate.id}`}
              >
                Delete
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default RecruitmentAndSelection;
