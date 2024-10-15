import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./Login.css";

const Login = () => {
  const userCtx = useContext(UserContext);
  const { credentials, handleCredentialsChange, handleLogin } = userCtx;

  return (
    <div>
      <form onSubmit={handleLogin} className="loginContainer mt-4">
        <div>
          <label htmlFor="username" className="form-label">
            Username:{" "}
          </label>
          <input
            className="form-control"
            name="username"
            value={credentials.username}
            onChange={handleCredentialsChange}
          />
        </div>
        <div>
          <label className="form-label m-2">Password: </label>
          <input
            className="form-control"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleCredentialsChange}
          />
        </div>
        <div className="buttonContainer">
          <button className="btn btn-primary" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
