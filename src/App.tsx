import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/Signin/Signin";
import { SignUp } from "./pages/Signup/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
