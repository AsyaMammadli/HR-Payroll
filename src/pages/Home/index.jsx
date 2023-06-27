import "./index.css";
import Dashboard from "../../assets/dashboard.png";
import PageTitle from "../../components/PageTitle";

const Home = () => {
  return (
    <>
      <PageTitle name="Dashboard" />
      <div className="relative">
        <img src={Dashboard} alt="Dashboard" className="dashboardImg" />
        <p className="dashboardWelcome">Welcome to TalentCore!</p>
        <div className="divider"></div>
      </div>
    </>
  );
};

export default Home;
