import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Signin } from "./pages/Signin/Signin";
import { Signup } from "./pages/Signup/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
