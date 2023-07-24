import { useNavigate } from "react-router-dom";

import "./index.css";
const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <div className="m-auto pt-20 max-w-[600px] h-full">
      <div>
        <h1 className="loginHeading">Login</h1>
        <div>
          <input type="text" className="loginInput" placeholder="Username" />
          <input type="text" className="loginInput" placeholder="Password" />
          <div className="flex justify-between font-extralight mt-2">
            <span>Forget password?</span>
            <span>Registration</span>
          </div>
          <button className="loginButton" onClick={handleClick}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
