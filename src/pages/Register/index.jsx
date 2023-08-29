import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Swal from "sweetalert2";
import { BaseApi as axios } from "../../api/axios";
import "./index.css";

const Register = () => {
  const navigate = useNavigate();
  const email = useRef("");
  const password = useRef("");

  const handleRegister = async () => {
    let payload = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log(payload);

    try {
      await axios.post("/register", payload);
      Swal.fire({ icon: "success", title: "Success!" });
      navigate("/login");
    } catch (error) {
      console.log(error);
      let message = error.response?.data || error.message;
      Swal.fire({ icon: "error", title: "Error!", text: message });
    }
  };

  return (
    <div className="m-auto pt-20 max-w-[600px] h-full">
      <div>
        <h1 className="loginHeading">Register</h1>
        <div>
          <input
            type="email"
            className="loginInput"
            placeholder="Email"
            ref={email}
          />
          <input
            type="password"
            className="loginInput"
            placeholder="Password"
            ref={password}
          />
          <button className="loginButton" onClick={handleRegister}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
