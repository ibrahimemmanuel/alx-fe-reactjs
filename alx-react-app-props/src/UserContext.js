// src/UserContext.js
import { createContext } from "react";

// Step 1: Create the context
export const UserContext = createContext();

// Step 2: Create a provider component
export const UserProvider = ({ children }) => {
  // sample user data (this can later come from API, etc.)
  const [userData] = useState({
    name: "John Doe",
    email: "john@example.com",
    age: 25,
  });

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
