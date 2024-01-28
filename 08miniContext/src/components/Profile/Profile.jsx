import { useContext } from "react";
import UserContext from "../../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);
  

  if (!user) {
    return <div>Please Login</div>;
  } else {
    return (
      <div>
        Welcome {user.userName} <br /> Your Password: {user.password}{" "}
      </div>
    );
  }
}

export default Profile;
