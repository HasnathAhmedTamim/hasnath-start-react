import "./App.css";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import UserContextProvider from "./context/userContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="bg-slate-400 h-[800px] text-white">
        <h1 className="text-4xl text-white">Hello !!!!!!!!</h1>

        <Login></Login>
        <Profile></Profile>
      </div>
    </UserContextProvider>
  );
}

export default App;
