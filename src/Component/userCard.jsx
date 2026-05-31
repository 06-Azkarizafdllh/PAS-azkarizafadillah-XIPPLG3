import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const UserCard = ({ user }) => {
  const { likedUsers, setLikedUsers } = useContext(UserContext);

  const [followed, setFollowed] = useState(false);

  const handleLike = () => {
    if (!likedUsers.includes(user.id)) {
      setLikedUsers([...likedUsers, user.id]);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "15px",
        width: "250px",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>

      <button onClick={handleLike}>
        {likedUsers.includes(user.id) ? "Liked" : "Like"}
      </button>

      <button
        onClick={() => setFollowed(!followed)}
        style={{ marginLeft: "10px" }}
      >
        {followed ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default UserCard;