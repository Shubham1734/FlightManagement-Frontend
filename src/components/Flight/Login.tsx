import React, { useState } from "react";
import { getUser, loginUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
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
      const userData = await getUser(username);
      Cookies.set('userData', JSON.stringify(userData.data), { expires: 1 });
     
      navigate("/flights-search");
    } catch (e) {
      setFlag(true);
      console.log("something wrong");
    }
  };


  return (
    <>
    <h2>Login</h2>
      <div className="loginform-div">
        
        <form onSubmit={handleSubmit}>
          <div>
            <label>username:</label><br />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              required
            />
          </div>
          <div>
            <label>Password:</label><br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </div><br />
          <div>
            <button type="submit" >Login</button>
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
