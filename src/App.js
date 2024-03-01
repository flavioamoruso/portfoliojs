import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import HomeScreen from "./screen/Homescreen";
import Projects from "./screen/Projects";
import Contact from "./screen/Contact";
import ErrorScreen from "./screen/ErrorScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" Component={HomeScreen} />
          <Route path="/projects" Component={Projects} />
          <Route path="/contact" Component={Contact} />
          <Route path="*" Component={ErrorScreen} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
