import React, { useState } from "react";
import { loginUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux/actions/userAction";
import "../../css/login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [flag, setFlag] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser(username, password);
      console.log(response.data);
      console.log(response.data)
      sessionStorage.setItem('token', response.data.jwttoken);
      dispatch(addUser(response.data));
      navigate("/flights-search");
    } catch (e) {
      setFlag(true);
      console.log("something wrong");
    }
  };
  return (
    <>
      <div className="form-div">
        <h2 id="login">Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </div>
          <div>
            <button type="submit" id="login-button">Login</button>
          </div>
          <div>
            {flag === true ? (
              <>
                <h4>Invalid credentials</h4>
              </>
            ) : (
              <></>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
