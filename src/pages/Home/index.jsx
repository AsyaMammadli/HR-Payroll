import "./index.css";
import Dashboard from "../../assets/dashboard.png";
import PageTitle from "../../components/PageTitle";
import Sendicon from "../../assets/sendicon.svg";
import Rectangle from "../../assets/Rectangle.png";
import Raketa from "../../assets/Raketa.png";
import Coin from "../../assets/Coin.png";

const Home = () => {
  return (
    <>
      <PageTitle name="Dashboard" />
      <div className="relative">
        <img src={Dashboard} alt="Dashboard" className="dashboardImg" />
        <p className="dashboardWelcome">Welcome to TalentCore!</p>
        <div className="divider"></div>

        <div className="flex mt-16">
          <div className="flex">
            <div className="rectangle">
              <div className="leftborderdiv"></div>
              <div className="rectangleContent">
                <img src={Rectangle} alt="Rectangle" />
                <div className="w-[100%]">
                  <div>Sr. UX Designer</div>
                  <div className="text-slate-400 font-thin">
                    Posted 2 days ago
                  </div>
                </div>
                <img src={Sendicon} alt="Sendicon" />
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="rectangle">
              <div className="leftborderdiv bg-red-600"></div>
              <div className="rectangleContent">
                <img src={Raketa} alt="Raketa" />
                <div className="w-[100%]">
                  <div>Growth Manager</div>
                  <div className="text-slate-400 font-thin">
                    Posted 5 days ago
                  </div>
                </div>
                <img src={Sendicon} alt="Sendicon" />
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="rectangle">
              <div className="leftborderdiv bg-amber-500"></div>
              <div className="rectangleContent">
                <img src={Coin} alt="Coin" />
                <div className="w-[100%]">
                  <div>Financial Analyst</div>
                  <div className="text-slate-400 font-thin">
                    Posted 10 days ago
                  </div>
                </div>
                <img src={Sendicon} alt="Sendicon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
