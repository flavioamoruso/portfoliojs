import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import HomeScreen from "./screen/Homescreen";
import Projects from "./screen/ProjectsScreen";
import Contact from "./screen/Contact";
import ErrorScreen from "./screen/ErrorScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
  return (
    <>
      {isLoading == true ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}

export default App;
