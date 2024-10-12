import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const userCtx = useContext(UserContext);
  const {
    credentials,
    handleCredentialsChange,
    handleLogin,
    isLoggedIn,
    setIsLoggedIn,
    handleLogout,
  } = userCtx;

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">username</label>
        <input
          name="username"
          value={credentials.username}
          onChange={handleCredentialsChange}
        />
        <label>password</label>
        <input
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleCredentialsChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
