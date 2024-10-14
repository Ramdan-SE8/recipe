import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./Login.css";

const Login = () => {
  const userCtx = useContext(UserContext);
  const { credentials, handleCredentialsChange, handleLogin } = userCtx;

  return (
    <div>
      <form onSubmit={handleLogin} className="loginContainer">
        <div>
          <label htmlFor="username">Username: </label>
          <input
            name="username"
            value={credentials.username}
            onChange={handleCredentialsChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleCredentialsChange}
          />
        </div>
        <div className="buttonContainer">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
