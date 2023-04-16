import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { UserProvider } from "./contexts/UserContext";
import { Home } from "./pages/Home/Home";
import { Room } from "./pages/Room/Room";
import { SignIn } from "./pages/Signin/Signin";
import { SignUp } from "./pages/Signup/Signup";

function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/room" element={<Room />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
