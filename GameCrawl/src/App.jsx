// import './App.css'

import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/Global/Navbar";
import { AllGamesProvider } from "./context/AllGamesProvider";
import { UserProvider } from "./context/UserProvider";

function App() {
  return (
    <UserProvider>
      <AllGamesProvider>
        <NavBar></NavBar>
        <AppRoutes></AppRoutes>
      </AllGamesProvider>
    </UserProvider>
  );
}

export default App;
