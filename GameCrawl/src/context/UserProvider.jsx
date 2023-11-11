import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();
const hardCodedUsers = [
  {
    userId: 1,
    userName: "Bernard",
    userEmail: "bernard@gmail.com",
    userPassword: "alligator3",
    collections: [517, 423],
  },
  {
    userId: 2,
    userName: "Harold",
    userEmail: "harold@yahoo.com",
    userPassword: "haroldisdabomb",
    collections: [327, 386, 87, 525, 371],
  },
  {
    userId: 2,
    userName: "Mitchell",
    userEmail: "mitch",
    userPassword: "123",
    collections: [1, 540, 233],
  },
];

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function loginUser(userDb, values) {
    const foundUser = userDb.find((user) => {
      return (
        user.userEmail.toLowerCase() == values.userEmail.toLowerCase() &&
        user.userPassword == values.userPassword
      );
    });
    if (foundUser) {
      setUser(foundUser);
      navigate("/store");
    } else
      customDispatch({
        type: "error",
        errorMessage: `User ${values.userEmail} cannot be found or password is incorrect.`,
      });
  }

  function logoutUser() {
    setUser(null);
  }

  function error(errorMessage) {
    logoutUser();
    alert(errorMessage);
    navigate("/");
  }

  function removeGame(id) {
    const collections = user.collections.filter((item) => {
      return id != item;
    });

    console.log("remove", id, collections);
    setUser({ ...user, collections });
  }

  function addGame(id) {
    const { collections } = user;
    console.log("add", id, collections);
    setUser({ ...user, collections: [...collections, id] });
  }

  function userDispatch(action) {
    switch (action.type) {
      case "logout":
        logoutUser();
        break;
      case "login":
        const { values } = action;
        loginUser(hardCodedUsers, values);
        break;
      case "error":
        const { errorMessage } = action;
        error(errorMessage);
        break;
      case "removeGame":
        const { removeValue } = action;
        removeGame(removeValue);
        break;
      case "addGame":
        const { addValue } = action;
        addGame(addValue);
        break;
    }
  }

  return (
    <UserContext.Provider value={[user, userDispatch]}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
