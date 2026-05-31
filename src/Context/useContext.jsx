import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [likedUsers, setLikedUsers] = useState([]);

  return (
    <UserContext.Provider value={{ likedUsers, setLikedUsers }}>
      {children}
    </UserContext.Provider>
  );
};