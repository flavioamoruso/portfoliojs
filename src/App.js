import Navbar from "./components/Navbar";
import HomeScreen from "./screen/Homescreen";
import Projects from "./screen/Projects";
import About from "./screen/About";
import Contact from "./screen/Contact";
import ErrorScreen from "./screen/ErrorScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomeScreen} />
        <Route path="/projects" Component={Projects} />
        <Route path="/contact" Component={Contact} />
        <Route path="*" Component={ErrorScreen} />
      </Routes>
    </Router>
  );
}

export default App;
