import { useContext, useState } from "react";
import UserContext from "../../context/userContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({ userName, password });
  };

  return (
    <div>
      <h2>Login Here</h2>
      <br />
      <input
        className="bg-cyan-200 p-4 w-1/2 mb-2 rounded-md text-blue-700 font-bold"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        name="userName"
        id=""
      />
      <br />
      <input
        className="bg-cyan-200 p-4 w-1/2 mb-2 rounded-md text-blue-700 font-bold"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        name="password"
        id=""
      />
      <br />
      <button className="bg-red-600  p-2 rounded-xl" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;
