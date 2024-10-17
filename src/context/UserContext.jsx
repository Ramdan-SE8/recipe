import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  //Store Logged In UserName:
  const [loggedInUsername, setLoggedInUsername] = useState("");
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleCredentialsChange = (event) => {
    setCredentials((prevCredentials) => {
      const newCredentials = {
        ...prevCredentials,
        [event.target.name]: event.target.value,
      };
      return newCredentials;
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (!credentials.username || !credentials.password) {
      alert("Please provide both username and password.");
      return;
    }

    if (credentials.username === "admin" && credentials.password === "admin") {
      alert(
        `✅ Logged in with username: ${credentials.username} and password: ${credentials.password}`
      );
      setIsLoggedIn(true);
      setLoggedInUsername(credentials.username);
      setCredentials({
        username: "",
        password: "",
      });
      navigate("/", { replace: true });
    } else {
      alert("❌ Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Logged Out!");
  };

  const contextValue = {
    credentials,
    handleCredentialsChange,
    handleLogin,
    isLoggedIn,
    setIsLoggedIn,
    handleLogout,
    loggedInUsername,
    setLoggedInUsername,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
